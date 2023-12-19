import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}

export default RootLayout;
