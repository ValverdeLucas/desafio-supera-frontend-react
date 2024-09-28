import { StyledReturnButton } from "./ReturnButtonStyles"

interface AdvanceButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export function ReturnButton({ onClick, disabled }: AdvanceButtonProps) {
    return (
        <StyledReturnButton
            onClick={onClick}
            disabled={disabled}
            style={{ pointerEvents: disabled ? 'none' : undefined }}
        />
    );
}