export const byString = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  let a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
      let k = a[i];
      if (k in o) {
          o = o[k];
      } else {
          return;
      }
  }
  return o;
}

export const convertToBase64 = (blob) => {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
}

export const b64toBlob = (b64Data, contentType, sliceSize) => {
  contentType = contentType || "";
  sliceSize = sliceSize || 512;

  let byteCharacters = atob(b64Data);
  let byteArrays = [];

  for (
    let offset = 0;
    offset < byteCharacters.length;
    offset += sliceSize
  ) {
    let slice = byteCharacters.slice(offset, offset + sliceSize);

    let byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    let byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  let blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

export default (context, inject) => {
  inject('byString', byString)
  inject('b64toBlob', b64toBlob)
  inject('convertToBase64', convertToBase64)
}
