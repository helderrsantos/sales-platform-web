import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles"

export const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <LimitedContainer>
                <ContainerLogin>
                    <LogoImage src="./logo.png" />
                </ContainerLogin>
            </LimitedContainer>
        </ContainerLoginScreen>
    )
}