import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from '@mui/material';

const Students = () => {
  const [filter, setFilter] = useState('');
  const [level, setLevel] = useState('');

  // Datos simulados
  const students = [
    { id: 1, name: 'Juan Pérez', level: 'Primaria' },
    { id: 2, name: 'Ana López', level: 'Secundaria' },
    { id: 3, name: 'Carlos Martínez', level: 'Primaria' },
  ];

  // Filtrar resultados
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(filter.toLowerCase()) &&
    (level ? student.level === level : true)
  );

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">👥 Participantes</Typography>
        <Button variant="contained" color="primary">
          + Agregar participante
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Nivel</InputLabel>
          <Select
            value={level}
            label="Nivel"
            onChange={(e) => setLevel(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Primaria">Primaria</MenuItem>
            <MenuItem value="Secundaria">Secundaria</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Nivel</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.level}</TableCell>
                <TableCell align="right">
                  <Button size="small" variant="outlined" sx={{ mr: 1 }}>
                    Editar
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredStudents.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No se encontraron participantes.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Students;
