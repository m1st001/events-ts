import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";

export default function LoginModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary">Log in</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop="blur"
                className="dark text-foreground bg-background border-2"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <></>
                                    }
                                    label="Username"
                                    placeholder="Enter your username"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <i/>
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
