import styled from "styled-components";

const Button = styled.a`
  line-height: 1.1;
  height: 1.8rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #e8f5e9; /* Light greenish-white text to match header */
  background-color: #6b8e71; /* Darker green that matches your hover state */
  border-radius: 4px;
  border: 1px solid #7a9e7e; /* Your main green color */
  padding: 0.2rem 0.6rem;
  margin-left: 8px;
  font-size: 0.75rem;
  letter-spacing: 0.2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: #7a9e7e; /* Your main green color */
    color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-1px);
    text-decoration: none;
  }

  &:active {
    transform: translateY(0);
  }
`;

const Image = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 6px;
  filter: brightness(0) invert(1);
  opacity: 0.9;
`;

const Text = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.5px;
`;

function Coffee() {
  return (
    <Button target="_blank" href="https://buymeacoffee.com/joaosilva27">
      <Image
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <Text>Support Me</Text>
    </Button>
  );
}

export default Coffee;
