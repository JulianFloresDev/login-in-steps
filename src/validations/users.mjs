import Joi from 'joi';

const userCreateValidation = async (req, res, next) => {
  const bodySchema = Joi.object({
    nombre: Joi.string()
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
      .min(3)
      .max(255)
      .required()
      .messages({
        'string.empty': 'El nombre es requerido.',
        'string.pattern.base': 'El nombre solo puede contener letras.',
        'string.min': 'El nombre debe tener al menos 3 caracteres.',
        'string.max': 'El nombre no puede tener más de 255 caracteres.',
      }),
    segundo_nombre: Joi.string()
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*/)
      .allow('')
      .max(255)
      .messages({
        'string.pattern.base': 'El segundo nombre solo puede contener letras.',
        'string.max': 'El segundo nombre no puede tener más de 255 caracteres.',
      }),
    apellido_paterno: Joi.string()
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/)
      .min(3)
      .max(255)
      .required()
      .messages({
        'string.empty': 'El apellido paterno es requerido.',
        'string.pattern.base':
          'El apellido paterno solo puede contener letras.',
        'string.min': 'El apellido paterno debe tener al menos 3 caracteres.',
        'string.max':
          'El apellido paterno no puede tener más de 255 caracteres.',
      }),
    apellido_materno: Joi.string()
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]*/)
      .allow('')
      .max(255)
      .messages({
        'string.pattern.base':
          'El apellido materno solo puede contener letras.',
        'string.max':
          'El apellido materno no puede tener más de 255 caracteres.',
      }),
    fecha_de_nacimiento: Joi.date().iso().less('now').messages({
      'date.less':
        'Su fecha de nacimiento no puede ser posterior o igual a la fecha actual.',
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .lowercase()
      .required()
      .messages({
        'string.empty': 'El campo EMAIL es requerido.',
        'string.email': 'El campo EMAIL debe ser un email válido.',
        'any.required': 'El campo EMAIL es requerido.',
      }),
    telefono: Joi.string().max(20).messages({
      'string.max': 'El telefono debe contener como máximo 20 caracteres.',
    }),
  });

  const { error } = bodySchema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Error en los campos ingresados.',
      error: true,
      data: error.details,
    });
  }

  return next();
};

export default userCreateValidation;
