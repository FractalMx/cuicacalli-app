import React, { useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  CheckboxGroup,
  Stack,
  Checkbox,
  useToast,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const workshopOptions = ['Danza', 'Pintura', 'Guitarra', 'Canto', 'Teatro', 'Piano'];

const StudentFormModal = ({ isOpen, onClose, student, refresh }) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      age: '',
      workshops: [],
    },
  });

  useEffect(() => {
    if (student) {
      reset(student);
    } else {
      reset({ name: '', age: '', workshops: [] });
    }
  }, [student, reset]);

  const onSubmit = async (data) => {
    try {
      if (student?.id) {
        await axios.put(`/api/students/${student.id}`, data);
        toast({ title: 'Participante actualizado', status: 'success', duration: 3000 });
      } else {
        await axios.post('/api/students', data);
        toast({ title: 'Participante registrado', status: 'success', duration: 3000 });
      }
      refresh();
      onClose();
    } catch (err) {
      toast({ title: 'Error al guardar', status: 'error', duration: 3000 });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{student ? 'Editar participante' : 'Nuevo participante'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="student-form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4} isRequired>
              <FormLabel>Nombre completo</FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Edad</FormLabel>
              <Controller
                name="age"
                control={control}
                render={({ field }) => <Input type="number" {...field} />}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Talleres inscritos</FormLabel>
              <Controller
                name="workshops"
                control={control}
                render={({ field }) => (
                  <CheckboxGroup {...field} value={field.value || []}>
                    <Stack spacing={2} direction="column">
                      {workshopOptions.map((w) => (
                        <Checkbox key={w} value={w}>
                          {w}
                        </Checkbox>
                      ))}
                    </Stack>
                  </CheckboxGroup>
                )}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3} variant="ghost">
            Cancelar
          </Button>
          <Button colorScheme="teal" type="submit" form="student-form" isLoading={isSubmitting}>
            Guardar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentFormModal;