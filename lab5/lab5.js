

    const mainContainer = document.querySelector(".main_container");


    const accordionData = [
        {
            title: "title 1",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, tenetur debitis? Esse dolore praesentium amet eum asperiores accusantium mollitia officia."
        },
        {
            title: "title 2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, tenetur debitis? Esse dolore praesentium amet eum asperiores accusantium mollitia officia."
        },
        {
            title: "title 3",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, tenetur debitis? Esse dolore praesentium amet eum asperiores accusantium mollitia officia."
        }
    ];


    function createAccordion(title, content) {
        const mainContainerAcc = document.createElement("div");
        mainContainerAcc.classList.add("main_container_acc");

        const listItem = document.createElement("div");
        listItem.classList.add("main_container_acc_list_item");

        const header = document.createElement("div");
        header.classList.add("main_container_acc_list_item_header");

        const headerTitle = document.createElement("h2");
        headerTitle.classList.add("main_container_acc_list_header_title");
        headerTitle.textContent = title;

        const button = document.createElement("button");
        button.classList.add("main_container_acc_list_header_btn");

        const buttonIcon = document.createElement("span");
        buttonIcon.classList.add("material-symbols-outlined");
        buttonIcon.textContent = ">";

        const description = document.createElement("div");
        description.classList.add("main_container_acc_list_item_desc");

        const contentP = document.createElement("p");
        contentP.textContent = content;

        button.appendChild(buttonIcon);
        header.appendChild(headerTitle);
        header.appendChild(button);
        description.appendChild(contentP);
        listItem.appendChild(header);
        listItem.appendChild(description);
        mainContainerAcc.appendChild(listItem);
        mainContainer.appendChild(mainContainerAcc);

        header.addEventListener("click", () => {
            header.classList.toggle("active");
        });
    }

    
    accordionData.forEach(data => createAccordion(data.title, data.content));

