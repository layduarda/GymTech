import { Button as ButtonNativeBase, IButtonProps, Text} from "native-base";

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest}: IButtonProps) {
    return(
        <ButtonNativeBase 
            w="full"
            h={12}
            borderRadius={14}
            bgColor="purple.600"
            _pressed={{
                bgColor: "purple.500",
                borderWidth: 2,
                borderColor: "purple.400"
            }}
        {...rest}
        >
            <Text color="white" fontSize="md">
                {title}
            </Text>
        </ButtonNativeBase>
    );
}