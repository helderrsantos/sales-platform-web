import { Input } from "../../shared/inputs/input/Input"
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles"

export const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png" />
            <LimitedContainer>
                <ContainerLogin>
                    <LogoImage src="./logo.png" />
                    <Input title='Usuário' />
                    <Input title='Senha' type="password" />
                </ContainerLogin>
            </LimitedContainer>
        </ContainerLoginScreen>
    )
}