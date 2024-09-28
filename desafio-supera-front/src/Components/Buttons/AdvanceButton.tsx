import { StyledAdvanceButton } from "./AdvanceButtonStyles"

interface AdvanceButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export function AdvanceButton({ onClick, disabled }: AdvanceButtonProps) {
    return (
        <StyledAdvanceButton
            onClick={onClick}
            disabled={disabled}
            style={{ pointerEvents: disabled ? 'none' : undefined }}
        />
    );
}