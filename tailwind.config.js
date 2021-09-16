module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                "40/50": "90%",
                "01": "663px",
                "02": "461px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
