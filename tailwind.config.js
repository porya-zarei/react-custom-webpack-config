module.exports = {
    mode: "production",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            mobile: {min: "0px", max: "600px"},
            tablet: {min: "600px", max: "1000px"},
            "mobile-tablet": {min: "0px", max: "1000px"},
            desktop: {min: "1000px", max: "1300px"},
            large: {min: "1300px", max: "1600px"},
            xlarge: {min: "1600px"},
            "desktop-xlarge": {min: "1000px"},
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
    },
    plugins: [],
};
