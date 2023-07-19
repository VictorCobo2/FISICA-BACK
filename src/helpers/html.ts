export const HTML_ALERT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Plantilla de Correo Electrónico</title>
    <style>
        /* Estilos generales */
        body {
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
    
        /* Estilos del encabezado */
        .header {
            background-color: #ffffff;
            padding: 20px;
            text-align: center;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    
        /* Estilos del logo */
        .logo {
            border-radius: 50%;
            border: 10px solid #E6C5C5;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
            width: 150px;
            height: 150px;
            margin: 0 auto;
        }
        
        /* Estilos del cuerpo del correo */
        .body {
            background-color: #ffffff;
            padding: 20px;
            font-family: Arial, sans-serif;
            line-height: 1.5;
            font-size: 16px;
            color: #333333;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            margin: 20px;
        }
        
        /* Estilos de los títulos */
        h2 {
            font-size: 24px;
            margin-top: 0;
            color: #333333;
            margin-bottom: 20px;
        }
    
        /* Estilos de los párrafos */
        p {
            margin: 0;
            margin-bottom: 10px;
            color: #333333;
        }
        
        /* Estilos del pie de página */
        .footer {
            background-color: #f2f2f2;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #999999;
            box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        
        /* Estilos para dispositivos móviles */
        @media only screen and (max-width: 600px) {
        /* Hacer el encabezado y el cuerpo del correo en bloque */
        
        /* Alinear el texto del encabezado y el cuerpo del correo */
        .header p, .body p {
            text-align: left;
        }

        /* Ajustar el tamaño del logo para dispositivos móviles */
        .logo {
            width: 80px;
            height: 80px;
        }

        /* Agregar un margen inferior adicional a los párrafos */
        p {
            margin-bottom: 20px;
        }

        /* Ajustar el tamaño de los títulos */
        h2 {
            font-size: 20px;
        }
        }


    </style>
</head>
<body>
    <!-- Encabezado del correo -->
    <div class="header">
        <img class="logo" src="https://cdn.discordapp.com/attachments/1079218912773808238/1105998518709141504/logo.jpg" alt="Logo" width="100px" height="100px">
    </div>

    <!-- Cuerpo del correo -->
    <div class="body">
        <h2>Bienvenido/a</h2>
        <p>Estimado/a Dr. Chapatin,</p>
        <p>Le informamos que su paciente, ha enviado una señal de alerta desde la aplicación Alarma Start, indicando que se encuentra en peligro y requiere atención inmediata.</p>
        <p>Por favor, comuníquese con el paciente lo antes posible y brinde la ayuda necesaria. Si tiene alguna duda o necesita más información, no dude en contactarnos.</p>
        <p>Atentamente,</p>
        <p>El equipo de Alarma Start</p>
    </div>
    
    <!-- Pie de página del correo -->
    <div class="footer">
        <p>Derechos Reservados &copy; 2023 AlarmaStart. Todos los derechos reservados.</p>
    </div>
</body>
</html>

</html>
`