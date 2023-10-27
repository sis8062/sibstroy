"use strict";

// Document elements

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const tendersRows = document.querySelectorAll(".tender__row");
const tendersContainer = document.querySelector("#tenders");

const modalSubject = document.querySelector(".modal__subject");
const modalType = document.querySelector(".modal__type");
const modalStart = document.querySelector(".modal__start");
const modalEnd = document.querySelector(".modal__end");
const modalDocument = document.querySelector(".modal__document");

// Tenders data

const tenders = [
  {
    id: "t1",
    subject: "Кирпичная кладка",
    type: "СМР",
    start: "02.10.2023",
    end: "13.10.2023",
    document: "https://disk.yandex.ru/d/F_XL8_OgGTZY5w",
  },
  {
    id: "t2",
    subject: "Установка дверей противопожарных",
    type: "СМР",
    start: "22.04.2024",
    end: "13.05.2024",
    document: "https://disk.yandex.ru/d/0_La_cJdsABa3Q",
  },
  {
    id: "t3",
    subject: "Монтаж витражей",
    type: "СМР",
    start: "08.07.2024",
    end: "29.07.2024",
    document: "https://disk.yandex.ru/d/0_La_cJdsABa3Q",
  },
  {
    id: "t4",
    subject: "Монтаж систем отопления и вентиляции",
    type: "СМР",
    start: "27.10.2024",
    end: "03.11.2024",
    document: "https://disk.yandex.ru/d/20ZgmyP1cFLDTw",
  },
];

tendersContainer.addEventListener("click", function (e) {
  const id = e.target.closest(".tender__row").id;

  for (let i = 0; i < tenders.length; i++) {
    if (tenders[i].id === id) {
      modalSubject.textContent = tenders[i].subject;
      modalType.textContent = " " + tenders[i].type;
      modalStart.textContent = " " + tenders[i].start;
      modalEnd.textContent = " " + tenders[i].end;
      modalDocument.textContent = "Скачать архив";
      modalDocument.setAttribute("href", tenders[i].document);
    }
  }
});

// Modal window

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < tendersRows.length; i++) {
  tendersRows[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    closeModal();
  }
});

// Color rows

for (let i = 1; i < tendersRows.length; i += 2) {
  tendersRows[i].style.background = "#efefef";
}
