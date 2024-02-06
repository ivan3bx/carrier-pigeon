/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./content/*.md", "./layouts/**/*.html"],
    theme: {
        fontFamily: {
            sans: ["avenir lt",
                "avenir",
                "-apple-system",
                "BlinkMacSystemFont",
                "segoe ui",
                "Roboto",
                "Oxygen-Sans",
                "Ubuntu",
                "Cantarell",
                "helvetica neue",
                "sans-serif"
            ],
            mono: [
                "Menlo",
                "Monaco",
                "Courier New",
                "monospace"
            ],
            serif: [
                "Georgia",
                "Cambria",
                "Times New Roman",
                "Times",
                "serif"
            ]
        },
        extend: {},
    },
    plugins: [],
}

