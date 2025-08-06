import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Workshops = () => {
  const [search, setSearch] = useState('');
  const [filterTeacher, setFilterTeacher] = useState('');

  // Datos simulados
  const workshops = [
    { id: 1, name: 'Guitarra', teacher: 'Martín R.', capacity: 12 },
    { id: 2, name: 'Pintura', teacher: 'María G.', capacity: 8 },
    { id: 3, name: 'Canto', teacher: 'Grecia L.', capacity: 10 },
  ];

  const filteredWorkshops = workshops.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterTeacher ? t.teacher === filterTeacher : true)
  );

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">📚 Talleres</Typography>
        <Button variant="contained" color="primary">
          + Agregar taller
        </Button>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={3}>
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Maestro</InputLabel>
          <Select
            value={filterTeacher}
            label="Maestro"
            onChange={(e) => setFilterTeacher(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Martín R.">Martín R.</MenuItem>
            <MenuItem value="María G.">María G.</MenuItem>
            <MenuItem value="Grecia L.">Grecia L.</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Maestro</TableCell>
              <TableCell>Cupo</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredWorkshops.map((workshop) => (
              <TableRow key={workshop.id}>
                <TableCell>{workshop.name}</TableCell>
                <TableCell>{workshop.teacher}</TableCell>
                <TableCell>{workshop.capacity}</TableCell>
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
            {filteredWorkshops.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No se encontraron talleres.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Workshops;
