document.addEventListener("DOMContentLoaded", () => {
    // Function to pick a random item from a list and remove it
    function pickAndRemoveRandomItem(list) {
        const randomIndex = Math.floor(Math.random() * list.length);
        const selectedItem = list[randomIndex];
        list.splice(randomIndex, 1); // Remove the item from the list
        return selectedItem.innerText;
    }

    // Function to pick random cast and update the lists
    function pickRandomCast() {
        // Convert NodeList to Array for easier manipulation
        let malesArray = Array.from(document.querySelectorAll("#males-list li"));
        let femalesArray = Array.from(document.querySelectorAll("#females-list li"));

        // Check if there are enough males and females to pick from
        if (malesArray.length < 2 || femalesArray.length < 2) {
            alert("Not enough cast members to pick from!");
            return;
        }

        // Pick random males for father and brother and remove them from the list
        const father = pickAndRemoveRandomItem(malesArray);
        const brother = pickAndRemoveRandomItem(malesArray);

        // Pick random females for mother and sister and remove them from the list
        const mother = pickAndRemoveRandomItem(femalesArray);
        const sister = pickAndRemoveRandomItem(femalesArray);

        // Populate the lists
        document.getElementById("father-list").innerHTML = `<li>${father}</li>`;
        document.getElementById("brother-list").innerHTML = `<li>${brother}</li>`;
        document.getElementById("mother-list").innerHTML = `<li>${mother}</li>`;
        document.getElementById("sister-list").innerHTML = `<li>${sister}</li>`;

        // Update the original male and female lists to reflect the removal
        const malesList = document.getElementById("males-list");
        malesList.innerHTML = malesArray.map(item => `<li>${item.innerText}</li>`).join('');

        const femalesList = document.getElementById("females-list");
        femalesList.innerHTML = femalesArray.map(item => `<li>${item.innerText}</li>`).join('');

        // Disable the button after clicking
        document.getElementById("pick-button").disabled = true;
    }

    // Attach event listener to the button
    document.getElementById("pick-button").addEventListener("click", pickRandomCast);
});
