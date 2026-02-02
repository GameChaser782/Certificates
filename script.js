const certificates = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    group: "Standalone",
    detail: "Professional certification",
    file: "AWS Certified Solutions Architect - Associate certificate.pdf",
  },
  {
    title: "Specialization Certificate",
    group: "Applied Data Science with Python",
    detail: "Coursera specialization",
    file: "Applied Data Science with Python/Specialization.pdf",
  },
  {
    title: "Course Certificate (U8J3NVTNTNPB)",
    group: "Applied Data Science with Python",
    detail: "Coursera course",
    file: "Applied Data Science with Python/Coursera U8J3NVTNTNPB.pdf",
  },
  {
    title: "Course Certificate (NGBQSP67QVFM)",
    group: "Applied Data Science with Python",
    detail: "Coursera course",
    file: "Applied Data Science with Python/Coursera NGBQSP67QVFM.pdf",
  },
  {
    title: "Course Certificate (LT3SCJFE3XNF)",
    group: "Applied Data Science with Python",
    detail: "Coursera course",
    file: "Applied Data Science with Python/Coursera LT3SCJFE3XNF.pdf",
  },
  {
    title: "Course Certificate (CH88RX5M2RMV)",
    group: "Applied Data Science with Python",
    detail: "Coursera course",
    file: "Applied Data Science with Python/Coursera CH88RX5M2RMV.pdf",
  },
  {
    title: "Course Certificate (2TPGLC3D7KBF)",
    group: "Applied Data Science with Python",
    detail: "Coursera course",
    file: "Applied Data Science with Python/Coursera 2TPGLC3D7KBF.pdf",
  },
  {
    title: "Specialization Certificate",
    group: "AWS Cloud Solution Architect",
    detail: "Coursera specialization",
    file: "AWS Cloud Solution Architect/Specialization.pdf",
  },
  {
    title: "Course Certificate (U3A659AYE28H)",
    group: "AWS Cloud Solution Architect",
    detail: "Coursera course",
    file: "AWS Cloud Solution Architect/Coursera U3A659AYE28H.pdf",
  },
  {
    title: "Course Certificate (ND22XBT7AVX9)",
    group: "AWS Cloud Solution Architect",
    detail: "Coursera course",
    file: "AWS Cloud Solution Architect/Coursera ND22XBT7AVX9.pdf",
  },
  {
    title: "Course Certificate (KHTUXWVCV4QF)",
    group: "AWS Cloud Solution Architect",
    detail: "Coursera course",
    file: "AWS Cloud Solution Architect/Coursera KHTUXWVCV4QF.pdf",
  },
  {
    title: "Course Certificate (K279RWLV972H)",
    group: "AWS Cloud Solution Architect",
    detail: "Coursera course",
    file: "AWS Cloud Solution Architect/Coursera K279RWLV972H.pdf",
  },
  {
    title: "Specialization Certificate",
    group: "Business Analytics",
    detail: "Coursera specialization",
    file: "Business Analytics/Specialization.pdf",
  },
  {
    title: "Course Certificate (VVYC3JYD875K)",
    group: "Business Analytics",
    detail: "Coursera course",
    file: "Business Analytics/Coursera VVYC3JYD875K.pdf",
  },
  {
    title: "Course Certificate (V3GAADTYEEZR)",
    group: "Business Analytics",
    detail: "Coursera course",
    file: "Business Analytics/Coursera V3GAADTYEEZR.pdf",
  },
  {
    title: "Course Certificate (PYX64FWFSNX2)",
    group: "Business Analytics",
    detail: "Coursera course",
    file: "Business Analytics/Coursera PYX64FWFSNX2.pdf",
  },
  {
    title: "Course Certificate (M7LMDT48P69V)",
    group: "Business Analytics",
    detail: "Coursera course",
    file: "Business Analytics/Coursera M7LMDT48P69V.pdf",
  },
  {
    title: "Course Certificate (7C38LHFVPQRG)",
    group: "Business Analytics",
    detail: "Coursera course",
    file: "Business Analytics/Coursera 7C38LHFVPQRG.pdf",
  },
  {
    title: "Inside-IIM Certificate (Harshit Upadhyay)",
    group: "Inside-IIM",
    detail: "Inside-IIM certificate",
    file: "Inside-IIM/Harshit_Upadhyay.pdf",
  },
  {
    title: "Inside-IIM Certificate (Harshit Upadhyay)",
    group: "Inside-IIM",
    detail: "Inside-IIM certificate",
    file: "Inside-IIM/Harshit Upadhyay.pdf",
  },
  {
    title: "Inside-IIM Certificate (Harshit Upadhyay)",
    group: "Inside-IIM",
    detail: "Inside-IIM certificate",
    file: "Inside-IIM/Harshit Upadhyay (1).pdf",
  },
  {
    title: "Coursera Project (WBLK767H88UN)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera WBLK767H88UN.pdf",
  },
  {
    title: "Coursera Project (JRT4CD92DNGY)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera JRT4CD92DNGY.pdf",
  },
  {
    title: "Coursera Project (FZM9RKY3X27B)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera FZM9RKY3X27B.pdf",
  },
  {
    title: "Coursera Project (FALE34G9UQUZ)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera FALE34G9UQUZ.pdf",
  },
  {
    title: "Coursera Project (C7JV5JYD4G4T)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera C7JV5JYD4G4T.pdf",
  },
  {
    title: "Coursera Project (A28NBZNDF6AU)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera A28NBZNDF6AU.pdf",
  },
  {
    title: "Coursera Project (67QD3RMYJJYN)",
    group: "Projects",
    detail: "Coursera guided project",
    file: "Projects/Coursera 67QD3RMYJJYN.pdf",
  },
];

const cards = document.getElementById("cards");
const filterButtons = document.getElementById("filter-buttons");
const searchInput = document.getElementById("search-input");
const totalCount = document.getElementById("total-count");
const groupCount = document.getElementById("group-count");

const groups = ["All", ...new Set(certificates.map((item) => item.group))];

let activeGroup = "All";
let searchTerm = "";

const createButton = (name) => {
  const button = document.createElement("button");
  button.textContent = name;
  button.className = name === activeGroup ? "active" : "";
  button.addEventListener("click", () => {
    activeGroup = name;
    [...filterButtons.children].forEach((child) =>
      child.classList.toggle("active", child.textContent === name)
    );
    renderCards();
  });
  return button;
};

const renderFilters = () => {
  filterButtons.innerHTML = "";
  groups.forEach((group) => filterButtons.appendChild(createButton(group)));
};

const renderCards = () => {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filtered = certificates.filter((item) => {
    const matchesGroup = activeGroup === "All" || item.group === activeGroup;
    const matchesSearch =
      normalizedSearch.length === 0 ||
      item.title.toLowerCase().includes(normalizedSearch) ||
      item.group.toLowerCase().includes(normalizedSearch) ||
      item.detail.toLowerCase().includes(normalizedSearch);
    return matchesGroup && matchesSearch;
  });

  cards.innerHTML = "";

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";

    const group = document.createElement("div");
    group.className = "card__group";
    group.textContent = item.group;

    const title = document.createElement("h3");
    title.className = "card__title";
    title.textContent = item.title;

    const meta = document.createElement("div");
    meta.className = "card__meta";
    meta.textContent = item.detail;

    const link = document.createElement("a");
    link.href = encodeURI(item.file);
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Open certificate";

    card.append(group, title, meta, link);
    cards.appendChild(card);
  });

  totalCount.textContent = certificates.length.toString();
  groupCount.textContent = (groups.length - 1).toString();
};

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderCards();
});

renderFilters();
renderCards();
