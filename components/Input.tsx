import {  Input as NativeBaseInput, IInputProps, FormControl } from "native-base";

type Props = IInputProps & {
    errorMessage?: string | null;
}

export function Input({errorMessage = null, isInvalid, ... rest}: Props) { 
    const invalid = !!errorMessage || isInvalid;

    return(
        <FormControl mb={4} isInvalid={invalid}>
        <NativeBaseInput 
            bg="gray.500"
            fontSize="md"
            h={12}
            isInvalid={invalid}
            placeholderTextColor="gray.500"
            isInvalid={invalid}
            borderWidth={0}
            borderRadius={12}
            _focus={{
                bgColor: "gray.300",
                borderWidth: 1,
                borderColor: "purple.700"
            }}
            _invalid={{
                borderWidth: 1,
                borderColor: "red.500"
            }}
                {... rest}
        />
        <FormControl.ErrorMessage>
            {errorMessage}
        </FormControl.ErrorMessage>
        </FormControl>
    );
}