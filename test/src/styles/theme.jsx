const deviceSizes = {
    Tablet: "768px",
    Desktop: "1200px"
};

const device = {
    Tablet: `only screen and (min-width: ${deviceSizes.Tablet})`,
    Desktop: `only screen and (min-width: ${deviceSizes.Desktop})`
};

const colors = {
    mainBg: "#F5F5F5",
}

export const theme = {
    device,
    colors
};