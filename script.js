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
        description:
          "Conduct inferential statistical analysis, evaluate data visualizations, enhance analyses with applied machine learning, and analyze social network connectivity with Python.",
        skills: [
          "Inferential Statistical Analysis",
          "Data Visualization Evaluation",
          "Applied Machine Learning",
          "Social Network Analysis",
        ],
        file:
          "Coursera Specializations/Applied Data Science with Python/Applied Data Science with Python Specialization.pdf",
      },
      courses: [
        {
          title: "Applied Plotting, Charting & Data Representation in Python",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Plotting, Charting & Data Representation in Python (U8J3NVTNTNPB).pdf",
        },
        {
          title: "Applied Social Network Analysis in Python",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Social Network Analysis in Python (NGBQSP67QVFM).pdf",
        },
        {
          title: "Applied Text Mining in Python",
          file:
            "Coursera Specializations/Applied Data Science with Python/Applied Text Mining in Python (LT3SCJFE3XNF).pdf",
        },
        {
          title: "Introduction to Data Science in Python",
          file:
            "Coursera Specializations/Applied Data Science with Python/Introduction to Data Science in Python (CH88RX5M2RMV).pdf",
        },
        {
          title: "Applied Machine Learning in Python",
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
        description:
          "Decide when and how to use key AWS services, design architectures for cost, performance, and operational excellence, build secure data lakes, and prepare for the Solutions Architect - Associate exam.",
        skills: [
          "Solution Architecture",
          "Cloud Security",
          "Serverless Computing",
          "Scalability",
          "Data Architecture",
          "Cloud Infrastructure",
        ],
        file:
          "Coursera Specializations/AWS Cloud Solution Architect/AWS Cloud Solutions Architect Specialization.pdf",
      },
      courses: [
        {
          title: "Introduction to Designing Data Lakes on AWS",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Introduction to Designing Data Lakes on AWS (U3A659AYE28H).pdf",
        },
        {
          title: "Exam Prep AWS Certified Solutions Architect - Associate",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Exam Prep AWS Certified Solutions Architect - Associate (ND22XBT7AVX9).pdf",
        },
        {
          title: "Architecting Solutions on AWS",
          file:
            "Coursera Specializations/AWS Cloud Solution Architect/Architecting Solutions on AWS (KHTUXWVCV4QF).pdf",
        },
        {
          title: "AWS Cloud Technical Essentials",
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
        description:
          "Use analytics for recruiting and performance evaluation, model supply and demand, make data-driven decisions, and predict customer behavior.",
        skills: [
          "Data-Driven Decision Making",
          "Customer Behavior Prediction",
          "Supply and Demand Modeling",
          "Recruiting & Performance Analytics",
        ],
        file:
          "Coursera Specializations/Business Analytics/Business Analytics Specialization.pdf",
      },
      courses: [
        {
          title: "Business Analytics Capstone",
          file:
            "Coursera Specializations/Business Analytics/Business Analytics Capstone (VVYC3JYD875K).pdf",
        },
        {
          title: "Operation Analytics",
          file:
            "Coursera Specializations/Business Analytics/Operation Analytics (V3GAADTYEEZR).pdf",
        },
        {
          title: "Customer Analytics",
          file:
            "Coursera Specializations/Business Analytics/Customer Analytics (PYX64FWFSNX2).pdf",
        },
        {
          title: "People Analytics",
          file:
            "Coursera Specializations/Business Analytics/People Analytics (M7LMDT48P69V).pdf",
        },
        {
          title: "Accounting Analysis",
          file:
            "Coursera Specializations/Business Analytics/Accounting Analysis (7C38LHFVPQRG).pdf",
        },
      ],
    },
  ],
  projects: [
    {
      title: "COVID19 Data Analysis Using Python",
      file:
        "Coursera Projects/COVID19 Data Analysis Using Python (67QD3RMYJJYN).pdf",
    },
    {
      title: "Tweet Emotion Recognition with TensorFlow",
      file:
        "Coursera Projects/Tweet Emotion Recognition with TensorFlow (A28NBZNDF6AU).pdf",
    },
    {
      title: "Generate Synthetic Images with DCGANs in Keras",
      file:
        "Coursera Projects/Generate Synthetic Images with DCGANs in Keras (C7JV5JYD4G4T).pdf",
    },
    {
      title: "Object Detection with Amazon SageMaker",
      file:
        "Coursera Projects/Object Detection with Amazon SageMaker (FALE34G9UQUZ).pdf",
    },
    {
      title: "Transfer Learning for NLP with TensorFlow Hub",
      file:
        "Coursera Projects/Transfer Learning for NLP with TensorFlow Hub (FZM9RKY3X27B).pdf",
    },
    {
      title: "Introduction to Basic Game Development using Scratch",
      file:
        "Coursera Projects/Introduction to Basic Game Development using Scratch (JRT4CD92DNGY).pdf",
    },
    {
      title: "Construct Stock Market Indices",
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
          file:
            "Other/Inside-IIM/Stock Markets, Investing and Career in Finance.pdf",
        },
        {
          title: "Futures and Option Trading",
          file: "Other/Inside-IIM/Futures and Option Trading.pdf",
        },
        {
          title: "Investment Banking 101",
          file: "Other/Inside-IIM/Investment Banking 101.pdf",
        },
      ],
    },
  ],
};

const importantCard = document.getElementById("important-card");
const specializationBlocks = document.getElementById("specialization-blocks");
const projectsBlocks =
  document.getElementById("projects-blocks") ||
  document.getElementById("projects-grid");
const othersBlocks = document.getElementById("others-blocks");
const totalCount = document.getElementById("total-count");
const groupCount = document.getElementById("group-count");
const pdfViewer = document.getElementById("pdf-viewer");
const pdfFrame = document.getElementById("pdf-frame");
const pdfTitle = document.getElementById("pdf-title");
const pdfClose = document.getElementById("pdf-close");
const pdfDownload = document.getElementById("pdf-download");
const pdfWindow = document.querySelector(".pdf-viewer__window");
const pdfHeader = document.querySelector(".pdf-viewer__header");

const getPdfViewerSrc = (file) => {
  const encodedFile = encodeURI(file);
  return `${encodedFile}#view=Fit`;
};

const mobileMediaQuery = window.matchMedia("(max-width: 800px)");
const isDesktopExpandedByDefault = () => !mobileMediaQuery.matches;
const isMobileExpandedByDefault = () => false;

const updateViewerDimensions = () => {
  if (!mobileMediaQuery.matches) {
    pdfWindow?.style.removeProperty("--viewer-width");
    pdfWindow?.style.removeProperty("--viewer-height");
    return;
  }

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const outerPadding = 24;
  const headerHeight = pdfHeader?.offsetHeight ?? 96;
  const maxWidth = viewportWidth - outerPadding;
  const maxFrameHeight = viewportHeight - outerPadding - headerHeight;

  const widthFromHeight = maxFrameHeight * 1.414;
  const fittedWidth = Math.min(maxWidth, widthFromHeight);
  const fittedHeight = fittedWidth / 1.414;

  pdfWindow?.style.setProperty("--viewer-width", `${Math.max(fittedWidth, 0)}px`);
  pdfWindow?.style.setProperty("--viewer-height", `${Math.max(fittedHeight, 0)}px`);
};

const applyCollapsibleState = (container, expanded) => {
  const header = container.querySelector("[data-toggle-header]");
  if (!header) {
    return;
  }
  header.setAttribute("aria-expanded", String(expanded));
  container.classList.toggle("is-collapsed", !expanded);
};

const createToggleIcon = () => {
  const toggleIcon = document.createElement("span");
  toggleIcon.className = "block__toggle-icon";
  toggleIcon.setAttribute("aria-hidden", "true");
  toggleIcon.textContent = "+";
  return toggleIcon;
};

const createCollapsibleHeader = ({ titleText, labelText, titleTag = "span", className = "block__header block__toggle" }) => {
  const header = document.createElement("button");
  header.className = className;
  header.type = "button";
  header.dataset.toggleHeader = "true";

  const title = document.createElement(titleTag);
  title.className = "block__title";
  title.textContent = titleText;

  const label = document.createElement("span");
  label.className = "label";
  label.textContent = labelText;

  const headerText = document.createElement("span");
  headerText.className = "block__header-text";
  headerText.append(title, label);

  header.append(headerText, createToggleIcon());
  return header;
};

const openPdf = (item) => {
  pdfTitle.textContent = item.title;
  pdfFrame.src = getPdfViewerSrc(item.file);
  pdfDownload.href = encodeURI(item.file);
  updateViewerDimensions();
  pdfViewer.classList.add("is-open");
  pdfViewer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closePdf = () => {
  pdfViewer.classList.remove("is-open");
  pdfViewer.setAttribute("aria-hidden", "true");
  pdfFrame.src = "";
  pdfDownload.removeAttribute("href");
  pdfTitle.textContent = "";
  document.body.style.overflow = "";
};

const createCard = (item) => {
  const card = document.createElement("article");
  card.className = "card card--clickable";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = item.title;

  card.append(title);

  const activate = () => openPdf(item);
  card.addEventListener("click", activate);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });
  return card;
};

const createFeatureCard = (item, options = {}) => {
  const { tone = "accent" } = options;
  const card = document.createElement("article");
  card.className = `feature-card${tone === "plain" ? " feature-card--plain" : ""}`;

  const text = document.createElement("div");
  const title = document.createElement("h3");
  title.className = "feature-card__title";
  title.textContent = item.title;

  const meta = document.createElement("p");
  meta.className = "feature-card__meta";
  meta.textContent = item.detail;

  if (item.description) {
    const description = document.createElement("p");
    description.className = "feature-card__description";
    description.textContent = item.description;
    text.appendChild(description);
  }

  if (item.skills?.length) {
    const skillsWrapper = document.createElement("div");
    skillsWrapper.className = "feature-card__skills";

    const skillsLabel = document.createElement("span");
    skillsLabel.className = "skills__label";
    skillsLabel.textContent = "Key skills";

    const skillsList = document.createElement("div");
    skillsList.className = "skills";
    item.skills.forEach((skill) => {
      const chip = document.createElement("span");
      chip.className = "skill-chip";
      chip.textContent = skill;
      skillsList.appendChild(chip);
    });

    skillsWrapper.append(skillsLabel, skillsList);
    text.appendChild(skillsWrapper);
  }

  text.prepend(title, meta);

  const link = document.createElement("button");
  link.type = "button";
  link.className = "action-button action-button--pill";
  link.textContent = "Open certificate";
  link.addEventListener("click", () => openPdf(item));

  card.append(text, link);
  return card;
};

const renderImportant = () => {
  if (!importantCard) {
    return;
  }
  importantCard.innerHTML = "";
  importantCard.appendChild(createFeatureCard(data.important));
};

const renderSpecializations = () => {
  if (!specializationBlocks) {
    return;
  }
  specializationBlocks.innerHTML = "";
  data.specializations.forEach((specialization) => {
    const block = document.createElement("div");
    block.className = "block";
    block.dataset.collapsible = "true";
    block.dataset.expandedDesktop = String(isDesktopExpandedByDefault());
    block.dataset.expandedMobile = String(isMobileExpandedByDefault());

    const header = createCollapsibleHeader({
      titleText: specialization.name,
      labelText: "Coursera Specialization",
    });

    const subtitle = document.createElement("p");
    subtitle.className = "block__subtitle";
    subtitle.textContent = "The specialization included these courses.";

    const featured = createFeatureCard(specialization.focus, { tone: "plain" });

    const grid = document.createElement("div");
    grid.className = "grid";
    specialization.courses.forEach((course) => {
      grid.appendChild(createCard(course));
    });

    const content = document.createElement("div");
    content.className = "block__content";
    content.append(subtitle, featured, grid);

    header.addEventListener("click", () => {
      const nextExpanded = header.getAttribute("aria-expanded") !== "true";
      if (mobileMediaQuery.matches) {
        block.dataset.expandedMobile = String(nextExpanded);
      } else {
        block.dataset.expandedDesktop = String(nextExpanded);
      }
      applyCollapsibleState(block, nextExpanded);
    });

    block.append(header, content);
    specializationBlocks.appendChild(block);
  });
};

const syncMobileCollapsibles = () => {
  document.querySelectorAll("[data-collapsible='true']").forEach((block) => {
    const header = block.querySelector("[data-toggle-header]");
    if (!header) {
      return;
    }
    const isExpanded = mobileMediaQuery.matches
      ? block.dataset.expandedMobile === "true"
      : block.dataset.expandedDesktop !== "false";
    applyCollapsibleState(block, isExpanded);
  });
};

const renderProjects = () => {
  if (!projectsBlocks) {
    return;
  }
  projectsBlocks.innerHTML = "";

  const block = document.createElement("div");
  block.className = "block";
  block.dataset.collapsible = "true";
  block.dataset.expandedDesktop = "true";
  block.dataset.expandedMobile = "false";

  const header = createCollapsibleHeader({
    titleText: "Coursera Projects",
    labelText: "Coursera Projects",
  });

  const subtitle = document.createElement("p");
  subtitle.className = "block__subtitle";
  subtitle.textContent = "Short guided projects and focused skill sprints.";

  const grid = document.createElement("div");
  grid.className = "grid";
  data.projects.forEach((project) => {
    grid.appendChild(createCard(project));
  });

  const content = document.createElement("div");
  content.className = "block__content";
  content.append(subtitle, grid);

  header.addEventListener("click", () => {
    const nextExpanded = header.getAttribute("aria-expanded") !== "true";
    if (mobileMediaQuery.matches) {
      block.dataset.expandedMobile = String(nextExpanded);
    } else {
      block.dataset.expandedDesktop = String(nextExpanded);
    }
    applyCollapsibleState(block, nextExpanded);
  });

  block.append(header, content);
  projectsBlocks.appendChild(block);
};

const renderOthers = () => {
  if (!othersBlocks) {
    return;
  }
  othersBlocks.innerHTML = "";
  data.others.forEach((collection) => {
    const block = document.createElement("div");
    block.className = "block";
    block.dataset.collapsible = "true";
    block.dataset.expandedDesktop = "true";
    block.dataset.expandedMobile = "false";

    const header = createCollapsibleHeader({
      titleText: collection.name,
      labelText: "Other certificates",
    });

    const grid = document.createElement("div");
    grid.className = "grid";
    collection.items.forEach((item) => {
      grid.appendChild(createCard(item));
    });

    const content = document.createElement("div");
    content.className = "block__content";
    content.append(grid);

    header.addEventListener("click", () => {
      const nextExpanded = header.getAttribute("aria-expanded") !== "true";
      if (mobileMediaQuery.matches) {
        block.dataset.expandedMobile = String(nextExpanded);
      } else {
        block.dataset.expandedDesktop = String(nextExpanded);
      }
      applyCollapsibleState(block, nextExpanded);
    });

    block.append(header, content);
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

pdfClose?.addEventListener("click", closePdf);
pdfViewer?.addEventListener("click", (event) => {
  if (event.target === pdfViewer) {
    closePdf();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && pdfViewer.classList.contains("is-open")) {
    closePdf();
  }
});

if (typeof mobileMediaQuery.addEventListener === "function") {
  mobileMediaQuery.addEventListener("change", syncMobileCollapsibles);
} else if (typeof mobileMediaQuery.addListener === "function") {
  mobileMediaQuery.addListener(syncMobileCollapsibles);
}

window.addEventListener("resize", () => {
  syncMobileCollapsibles();
  if (pdfViewer.classList.contains("is-open")) {
    updateViewerDimensions();
  }
});

renderImportant();
renderSpecializations();
renderProjects();
renderOthers();
syncMobileCollapsibles();

if (totalCount) {
  totalCount.textContent = countTotalCertificates().toString();
}
if (groupCount) {
  groupCount.textContent = "4";
}

if (pdfViewer && pdfFrame && pdfTitle && pdfDownload) {
  openPdf(data.important);
}
