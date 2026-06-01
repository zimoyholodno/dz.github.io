const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => tabLogic(tab));

function setActive(element: Element, active: boolean) {
  element.setAttribute("data-active", active ? "true" : "false");
}

function setOpacity(element: Element, opacity: boolean) {
  element.setAttribute("data-opacity", opacity ? "true" : "false");
}

function setTab(element: Element, tab: number) {
  element.setAttribute("data-tab", String(tab));
}

function getTab(element: Element) {
  return element.getAttribute("data-tab");
}

function getSelected(elements: NodeListOf<Element>, index: string) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute("data-tab") === index) {
      return elements[i];
    }
  }
}

function handleClick(
  event: Event,
  triggers: NodeListOf<Element>,
  contents: NodeListOf<Element>,
) {
  triggers.forEach((trigger) => {
    setActive(trigger, false);
  });

  contents.forEach((content) => {
    setActive(content, false);
    setOpacity(content, false);
  });

  if (event.target instanceof Element) {
    const index = getTab(event.target);

    if (index) {
      const selectedTrigger = getSelected(triggers, index);
      const selectedContent = getSelected(contents, index);

      if (selectedContent && selectedTrigger) {
        setActive(selectedTrigger, true);
        setActive(selectedContent, true);

        setTimeout(() => {
          setOpacity(selectedContent, true);
        }, 200);
      }
    }
  }
}

function tabLogic(tab: Element) {
  const triggers = tab.querySelectorAll(".tab-trigger");
  const contents = tab.querySelectorAll(".tab-content");

  const open = tab.getAttribute("data-open") || 1;

  triggers.forEach((trigger, index) => {
    setTab(trigger, index + 1);
    if (+open === index + 1) {
      setActive(trigger, true);
    }
  });

  contents.forEach((content, index) => {
    setTab(content, index + 1);
    if (+open === index + 1) {
      setActive(content, true);
      setOpacity(content, true);
    }
  });

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) =>
      handleClick(event, triggers, contents),
    );
  });
}
