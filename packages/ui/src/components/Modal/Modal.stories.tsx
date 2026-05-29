import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import { Modal } from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"]
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Invite teammate</Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Invite teammate"
        description="Grant access to shared analytics and media workflows."
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Send invite</Button>
          </>
        }
      >
        <TextField label="Email address" placeholder="name@example.com" type="email" />
      </Modal>
    </>
  );
}

export const Default: Story = {
  args: {
    open: false,
    onOpenChange: () => undefined,
    title: "Invite teammate",
    children: null
  },
  render: () => <ModalExample />
};
