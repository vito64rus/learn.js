const DOM = {
  type: "body",
  classNames: [],
  id: null,
  children: [
    {
      type: "div",
      classNames: ["wrapper"],
      id: null,
      children: [
        {
          type: "header",
          classNames: ["header", "container", "mb-8"],
          id: null,
          children: [],
        },
        {
          type: "div",
          classNames: ["main", "container", "mb-8"],
          id: null,
          children: [
            {
              type: "div",
              classNames: ["products", "mb-8"],
              id: "unicalId",
              children: [
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: "footer",
          classNames: ["footer", "container"],
          id: null,
          children: [],
        },
      ],
    },
  ],
};

function checkIfMatchesSelector(element, selector) {
  if (!element || !selector) return false;
  // Селектор класса.
  if (selector[0] === ".") {
    const checkClass = selector.slice(1); 

    for (let i = 0; i < element.classNames.length; i++) {
      if (element.classNames[i] === checkClass) return true;
    }
    return false;
  }
  // Селектор ID.
  else if (selector[0] === "#") {
    const checkID = selector.slice(1); 
    return element.id === checkID; 
  }
  // Селектор типа.
  else {
    return element.type === selector;
  }
}

// Функция для поиска первого элемента (querySelector)
function myQuerySelector(selector) {
  if (typeof selector !== "string" || selector.trim() === "") return null; // Проверка на Null 
  const found = findFirstElement(DOM, selector); 
  if (found) return found;
  return null;
}

// Рекурсивная функция для querySelector
function findFirstElement(currentElement, selector) {
  // Проверяем текущий элемент
  if (checkIfMatchesSelector(currentElement, selector)) return currentElement; 
  // Если есть дети, идем по детям
  if (currentElement.children) {
    for (let i = 0; i < currentElement.children.length; i++) {
      const found = findFirstElement(currentElement.children[i], selector);
      if (found) return found;
    }
  }
  return null; // Если не нашли
}

// Функция для поиска всех элементов (querySelectorAll)
function myQuerySelectorAll(selector) {
  if (typeof selector !== "string" || selector.trim() === "") return []; // Проверка на пустой массив.

  const results = []; 
  findAllElements(DOM, selector, results);

  if (results.length > 0) return results;
  return [];
}

function findAllElements(currentElement, selector, results) {
  if (checkIfMatchesSelector(currentElement, selector)) {
    results.push(currentElement);
  }
  if (currentElement.children) {
    for (let i = 0; i < currentElement.children.length; i++) {
      findAllElements(currentElement.children[i], selector, results);
    }
  }
}

const firstProduct = myQuerySelector(".product");
const idElement = myQuerySelector("#unicalId");
const allContainers = myQuerySelectorAll(".container");
const notFound = myQuerySelector("");
const notFoundAll = myQuerySelectorAll("");

console.log(firstProduct);    
console.log(idElement);     
console.log(allContainers);  
console.log(notFound);
console.log(notFoundAll);