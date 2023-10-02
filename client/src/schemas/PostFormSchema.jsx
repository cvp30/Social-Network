import * as Yup from "yup"

export const PostFormSchema = Yup.object().shape({
  content: Yup.string()
    // .when('image', {
    //   is: (image) => !image,
    //   then: () => Yup.string().required("content is required when image is empty!"),
    //   otherwise: Yup.string(),
    // })
    .min(1, "Content must be at least 1 character!")
    .max(150, "Content cannot exceed 150 characters!")
  ,
  image: Yup.mixed(),
  // .test('file-type', 'Only image files are allowed', (value) => {

  //   // Verificar si el tipo de archivo es una imagen (por extensión)
  //   const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  //   for (let i = 0; i < value.length; i++) {
  //     const fileExtension = value[i].name.split('.').pop().toLowerCase();
  //     if (!allowedExtensions.includes(fileExtension)) {
  //       return false; // Al menos uno de los archivos no es una imagen permitida
  //     }
  //   }
  //   return true;
  // }),

  // .test('file-size', 'image is too big', (value) => {
  //   // Verificar el tamaño del archivo (8 MB máximo)
  //   const maxSize = 1 * 1024 * 1024; // 8 MB en bytes
  //   return value.size <= maxSize;
  // }),
  privacy: Yup.string()
    .oneOf(["PUBLIC", "FOLLOWERS"], "Invalid privacy value! Please select either PUBLIC or FOLLOWERS")
    .required("Privacy is required!"),
});