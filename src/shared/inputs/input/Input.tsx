import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';
import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
    title?: string
    margin?: string
}

export const Input = ({ title, margin, ...props }: InputProps) => {
    return (
        <BoxInput style={{ margin }}>
            {title &&
                <TitleInput>
                    {title}
                </TitleInput>
            }
            <InputAntd {...props} />
        </BoxInput>
    )
}