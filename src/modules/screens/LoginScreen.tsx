import { useState } from "react"
import Button from "../../shared/buttons/button/Button"
import { Input } from "../../shared/inputs/input/Input"
import axios from 'axios'
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles"

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        await axios({
            method: "post",
            url: 'http://localhost:8080/auth',
            data: {
                firstName: email,
                lastName: password,
            },
        }).then((result) => {
            alert(`Login realizado com sucesso ${result.data.accessToken}`)
            return result.data
        })
            .catch(() => {
                alert('Usuário ou senha incorretos')
            })
    }


    return (
        <ContainerLoginScreen>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <TitleLogin level={2} type="secondary" >LOGIN</TitleLogin>
                    <Input title='Usuário' margin="32px 0px 0px" onChange={handleEmail} value={email} />
                    <Input title='Senha' type="password" margin="32px 0px 0px" onChange={handlePassword} value={password} />
                    <Button type="primary" margin='64px 0px 16px 0px' onClick={handleLogin} >ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
    )
}