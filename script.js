
const knowledge = [
    "Mathematics",
    "Python Programming",
    "Statistics",
    "Data Structures",
    "Machine Learning",
    "Deep Learning"
];

const prerequisites = {

    "Machine Learning": [
        "Mathematics",
        "Python Programming",
        "Statistics",
        "Data Structures"
    ],

    "Deep Learning": [
        "Mathematics",
        "Python Programming",
        "Statistics",
        "Machine Learning"
    ],

    "Generative AI": [
        "Mathematics",
        "Python Programming",
        "Statistics",
        "Machine Learning",
        "Deep Learning"
    ],

    "Natural Language Processing": [
        "Python Programming",
        "Statistics",
        "Machine Learning",
        "Deep Learning"
    ],

    "Computer Vision": [
        "Mathematics",
        "Python Programming",
        "Machine Learning",
        "Deep Learning"
    ]

};

// Display knowledge topics

const topicsDiv = document.getElementById("topics");

knowledge.forEach(item => {

    topicsDiv.innerHTML += `
        <label class="topic">
            <input type="checkbox" value="${item}">
            ${item}
        </label>
    `;

});

// Analyze student knowledge

function analyzeKnowledge() {

    const selectedTopic =
        document.getElementById("topic").value;

    const required = prerequisites[selectedTopic];

    const checked = Array.from(
        document.querySelectorAll(
            '#topics input:checked'
        )
    ).map(input => input.value);

    const missing = required.filter(
        item => !checked.includes(item)
    );

    const output = document.getElementById("output");

    const result = document.getElementById("result");

    result.style.display = "block";

    if (missing.length === 0) {

        output.innerHTML = `
            <p><b>Selected Topic:</b> ${selectedTopic}</p>

            <p class="success">
                All prerequisite topics are completed!
            </p>

            <p>You are ready to learn ${selectedTopic}.</p>

            <h3>Completed Knowledge</h3>

            <ul>
                ${required.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>
        `;

    } else {

        output.innerHTML = `
            <p><b>Selected Topic:</b> ${selectedTopic}</p>

            <p class="warning">
                Missing Prerequisite Knowledge:
            </p>

            <ul>
                ${missing.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

            <h3>Recommended Learning Path</h3>

            ${missing.map((item, index) => `
                <div class="relation">
                    ${index + 1}. Learn ${item}
                </div>
            `).join("")}

            <p class="warning">
                Complete these topics before learning
                ${selectedTopic}.
            </p>
        `;

    }

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}
