import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonoFormat'
})
export class TelefonoFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Verificar si el valor es válido
    if (!value) return '';

    // Eliminar cualquier carácter que no sea numérico del valor
    const numericValue = value.replace(/\D/g, '');

    // Aplicar el formato al número de teléfono
    return '+56 ' + numericValue.substring(0, 4) + ' ' + numericValue.substring(4, 8);
  }
}
