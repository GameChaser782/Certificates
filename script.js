const data = {
  important: {
    title: "AWS Certified Solutions Architect - Associate",
    detail: "Amazon Web Services certification",
    file:
      "Important/AWS Certified Solutions Architect - Associate certificate.pdf",
  },
  specializations: [
    {
      name: "Applied Data Science with Python",
      focus: {
        title: "Applied Data Science with Python Specialization",
        detail: "Coursera specialization",
        file:
          "Coursera Specializations/Applied Data Science with Python/Applied Data Science with Python Specialization.pdf",
      },
      courses: [
        {
          title: "Applied Plotting, Charting & Data Representation in Python",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Plotting, Charting & Data Representation in Python (U8J3NVTNTNPB).pdf",
        },
        {
          title: "Applied Social Network Analysis in Python",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Social Network Analysis in Python (NGBQSP67QVFM).pdf",
        },
        {
          title: "Applied Text Mining in Python",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Text Mining in Python (LT3SCJFE3XNF).pdf",
        },
        {
          title: "Introduction to Data Science in Python",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Applied Data Science with Python/Introduction to Data Science in Python (CH88RX5M2RMV).pdf",
        },
        {
          title: "Applied Machine Learning in Python",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Machine Learning in Python (2TPGLC3D7KBF).pdf",
        },
      ],
    },
    {
      name: "AWS Cloud Solution Architect",
      focus: {
        title: "AWS Cloud Solutions Architect Specialization",
        detail: "Coursera specialization",
        file:
          "Coursera Specializations/AWS Cloud Solution Architect/AWS Cloud Solutions Architect Specialization.pdf",
      },
      courses: [
        {
          title: "Introduction to Designing Data Lakes on AWS",
          detail: "Coursera course",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Introduction to Designing Data Lakes on AWS (U3A659AYE28H).pdf",
        },
        {
          title: "Exam Prep AWS Certified Solutions Architect - Associate",
          detail: "Coursera course",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Exam Prep AWS Certified Solutions Architect - Associate (ND22XBT7AVX9).pdf",
        },
        {
          title: "Architecting Solutions on AWS",
          detail: "Coursera course",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Architecting Solutions on AWS (KHTUXWVCV4QF).pdf",
        },
        {
          title: "AWS Cloud Technical Essentials",
          detail: "Coursera course",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/AWS Cloud Technical Essentials (K279RWLV972H).pdf",
        },
      ],
    },
    {
      name: "Business Analytics",
      focus: {
        title: "Business Analytics Specialization",
        detail: "Coursera specialization",
        file:
          "Coursera Specializations/Business Analytics/Business Analytics Specialization.pdf",
      },
      courses: [
        {
          title: "Business Analytics Capstone",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Business Analytics/Business Analytics Capstone (VVYC3JYD875K).pdf",
        },
        {
          title: "Operation Analytics",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Business Analytics/Operation Analytics (V3GAADTYEEZR).pdf",
        },
        {
          title: "Customer Analytics",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Business Analytics/Customer Analytics (PYX64FWFSNX2).pdf",
        },
        {
          title: "People Analytics",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Business Analytics/People Analytics (M7LMDT48P69V).pdf",
        },
        {
          title: "Accounting Analysis",
          detail: "Coursera course",
          file:
            "Coursera Specializations/Business Analytics/Accounting Analysis (7C38LHFVPQRG).pdf",
        },
      ],
    },
  ],
  projects: [
    {
      title: "COVID19 Data Analysis Using Python",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/COVID19 Data Analysis Using Python (67QD3RMYJJYN).pdf",
    },
    {
      title: "Tweet Emotion Recognition with TensorFlow",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Tweet Emotion Recognition with TensorFlow (A28NBZNDF6AU).pdf",
    },
    {
      title: "Generate Synthetic Images with DCGANs in Keras",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Generate Synthetic Images with DCGANs in Keras (C7JV5JYD4G4T).pdf",
    },
    {
      title: "Object Detection with Amazon SageMaker",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Object Detection with Amazon SageMaker (FALE34G9UQUZ).pdf",
    },
    {
      title: "Transfer Learning for NLP with TensorFlow Hub",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Transfer Learning for NLP with TensorFlow Hub (FZM9RKY3X27B).pdf",
    },
    {
      title: "Introduction to Basic Game Development using Scratch",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Introduction to Basic Game Development using Scratch (JRT4CD92DNGY).pdf",
    },
    {
      title: "Construct Stock Market Indices",
      detail: "Coursera guided project",
      file:
        "Coursera Projects/Construct Stock Market Indices (WBLK767H88UN).pdf",
    },
  ],
  others: [
    {
      name: "Inside-IIM",
      items: [
        {
          title: "Stock Markets, Investing and Career in Finance",
          detail: "Inside-IIM certificate",
          file:
            "Other/Inside-IIM/Stock Markets, Investing and Career in Finance.pdf",
        },
        {
          title: "Futures and Option Trading",
          detail: "Inside-IIM certificate",
          file: "Other/Inside-IIM/Futures and Option Trading.pdf",
        },
        {
          title: "Investment Banking 101",
          detail: "Inside-IIM certificate",
          file: "Other/Inside-IIM/Investment Banking 101.pdf",
        },
      ],
    },
  ],
};

const importantCard = document.getElementById("important-card");
const specializationBlocks = document.getElementById("specialization-blocks");
const projectsGrid = document.getElementById("projects-grid");
const othersBlocks = document.getElementById("others-blocks");
const totalCount = document.getElementById("total-count");
const groupCount = document.getElementById("group-count");
const pdfViewer = document.getElementById("pdf-viewer");
const pdfFrame = document.getElementById("pdf-frame");
const pdfTitle = document.getElementById("pdf-title");
const pdfClose = document.getElementById("pdf-close");

const openPdf = (item) => {
  pdfTitle.textContent = item.title;
  pdfFrame.src = encodeURI(item.file);
  pdfViewer.classList.add("is-open");
  pdfViewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closePdf = () => {
  pdfViewer.classList.remove("is-open");
  pdfViewer.setAttribute("aria-hidden", "true");
  pdfFrame.src = "";
  pdfTitle.textContent = "";
  document.body.style.overflow = "";
};

const createCard = (item) => {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = item.title;

  const meta = document.createElement("div");
  meta.className = "card__meta";
  meta.textContent = item.detail;

  const link = document.createElement("button");
  link.type = "button";
  link.className = "action-button";
  link.textContent = "Open certificate";
  link.addEventListener("click", () => openPdf(item));

  card.append(title, meta, link);
  return card;
};

const createFeatureCard = (item) => {
  const card = document.createElement("article");
  card.className = "feature-card";

  const text = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "feature-card__title";
  title.textContent = item.title;

  const meta = document.createElement("p");
  meta.className = "feature-card__meta";
  meta.textContent = item.detail;

  text.append(title, meta);

  const link = document.createElement("button");
  link.type = "button";
  link.className = "action-button";
  link.textContent = "Open certificate";
  link.addEventListener("click", () => openPdf(item));

  card.append(text, link);
  return card;
};

const renderImportant = () => {
  importantCard.innerHTML = "";
  importantCard.appendChild(createFeatureCard(data.important));
};

const renderSpecializations = () => {
  specializationBlocks.innerHTML = "";
  data.specializations.forEach((specialization) => {
    const block = document.createElement("div");
    block.className = "block";

    const header = document.createElement("div");
    header.className = "block__header";

    const title = document.createElement("h3");
    title.className = "block__title";
    title.textContent = specialization.name;

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = "Specialization";

    header.append(title, label);

    const featured = createFeatureCard(specialization.focus);

    const grid = document.createElement("div");
    grid.className = "grid";
    specialization.courses.forEach((course) => {
      grid.appendChild(createCard(course));
    });

    block.append(header, featured, grid);
    specializationBlocks.appendChild(block);
  });
};

const renderProjects = () => {
  projectsGrid.innerHTML = "";
  data.projects.forEach((project) => {
    projectsGrid.appendChild(createCard(project));
  });
};

const renderOthers = () => {
  othersBlocks.innerHTML = "";
  data.others.forEach((collection) => {
    const block = document.createElement("div");
    block.className = "block";

    const header = document.createElement("div");
    header.className = "block__header";

    const title = document.createElement("h3");
    title.className = "block__title";
    title.textContent = collection.name;

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = "Other certificates";

    header.append(title, label);

    const grid = document.createElement("div");
    grid.className = "grid";
    collection.items.forEach((item) => {
      grid.appendChild(createCard(item));
    });

    block.append(header, grid);
    othersBlocks.appendChild(block);
  });
};

const countTotalCertificates = () => {
  const specializationCount = data.specializations.reduce(
    (sum, spec) => sum + spec.courses.length + 1,
    0
  );
  const projectsCount = data.projects.length;
  const othersCount = data.others.reduce(
    (sum, collection) => sum + collection.items.length,
    0
  );
  return 1 + specializationCount + projectsCount + othersCount;
};

pdfClose.addEventListener("click", closePdf);
pdfViewer.addEventListener("click", (event) => {
  if (event.target === pdfViewer) {
    closePdf();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && pdfViewer.classList.contains("is-open")) {
    closePdf();
  }
});

renderImportant();
renderSpecializations();
renderProjects();
renderOthers();

totalCount.textContent = countTotalCertificates().toString();
groupCount.textContent = "4";
