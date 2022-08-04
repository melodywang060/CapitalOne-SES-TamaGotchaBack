import { list } from 'serialport';
 
// list serial ports:
list().then (
  ports => ports.forEach(port =>console.log(port.path)),
  err => console.log(err)
)