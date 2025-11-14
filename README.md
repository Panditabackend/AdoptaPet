# PetLink - Aplicación de Adopción de Mascotas

Una aplicación web moderna y responsive para conectar refugios de animales con adoptantes potenciales en Chía, Cundinamarca.

## 🚀 Características

- **Búsqueda de mascotas**: Filtra por especie (perros, gatos, otros)
- **Perfiles detallados**: Información completa sobre cada mascota
- **Formulario de adopción**: Proceso simplificado para solicitar adopción
- **Panel de fundación**: Gestión de mascotas y solicitudes
- **Diseño responsive**: Funciona perfectamente en móviles, tablets y desktop

## 🛠️ Tecnologías

- HTML5
- CSS3 (con variables CSS personalizadas)
- JavaScript Vanilla
- Bootstrap 5.3.2 para responsive design

## 📱 Pantallas

1. **Bienvenida**: Introducción a PetLink
2. **Registro/Login**: Crear cuenta como adoptante o fundación
3. **Selección de perfil**: Vista de adoptante o fundación
4. **Búsqueda**: Buscar mascotas por especie
5. **Resultados (Gatos)**: Lista de gatos disponibles
6. **Resultados (Perros)**: Lista de perros disponibles
7. **Perfil de mascota**: Detalles completos de la mascota
8. **Formulario de adopción**: Solicitar adopción
9. **Confirmación**: Estado de la solicitud
10. **Perfil de fundación**: Información pública del refugio
11. **Panel administrativo**: Dashboard de la fundación
12. **Registrar mascota**: CRUD de mascotas
13. **Gestionar solicitudes**: Aprobar/rechazar solicitudes
14. **Verificación**: Proceso de verificación

## 🔧 Correcciones Realizadas

### JavaScript
- ✅ Corregido error de sintaxis (faltaba cierre de función `renderCats()`)
- ✅ Todas las funciones de navegación operativas
- ✅ Renderizado dinámico de tarjetas de mascotas
- ✅ Sistema de perfiles de mascotas funcional

### HTML
- ✅ Corregido carácter erróneo en línea 297
- ✅ Agregado Bootstrap 5.3.2 CDN
- ✅ Mejorada la estructura responsive
- ✅ Optimizado el layout del perfil de mascota

### CSS
- ✅ Integrado con Bootstrap manteniendo estilo personalizado
- ✅ Agregados breakpoints responsive (576px, 768px)
- ✅ Mejorados efectos hover en botones y tarjetas
- ✅ Transiciones suaves en formularios
- ✅ Grid responsive con auto-fill
- ✅ Optimizado para móviles

## 🎨 Diseño Responsive

### Móvil (< 576px)
- Grid de 1-2 columnas según espacio
- Navegación simplificada
- Botones full-width en formularios
- Header compacto

### Tablet (576px - 768px)
- Grid de 2 columnas
- Layout balanceado
- Espaciado mejorado

### Desktop (> 768px)
- Grid de 3 columnas
- Máximo ancho de 768px centrado
- Experiencia de escritorio completa

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Usa los botones "Siguiente" y "Anterior" para navegar
3. Explora las diferentes pantallas del prototipo
4. Interactúa con los botones para ver las transiciones

### Navegación por teclado
Los botones de navegación están en el footer:
- **Anterior**: Regresa a la pantalla previa
- **Siguiente**: Avanza a la siguiente pantalla
- El contador muestra: `Pantalla X / 14`

## 📝 Notas

- Este es un prototipo funcional con datos simulados
- Las imágenes están en la carpeta `img/`
- El logo está en `LOGO.png`
- Todas las acciones muestran alertas simuladas

## 🎯 Próximos Pasos

- [ ] Conectar con backend real
- [ ] Implementar base de datos
- [ ] Agregar sistema de autenticación
- [ ] Integrar mapas reales (Google Maps/OpenStreetMap)
- [ ] Implementar sistema de mensajería
- [ ] Agregar galería de fotos por mascota

---

Desarrollado para facilitar la adopción responsable de mascotas en Chía, Cundinamarca 🐾

