import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryregionalblocs'
})
export class CountryregionalblocsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let regionalBlocsName='';
    const displayFormat:String = args[0];
    // console.log('inside pipe',value);
    if(!value.length){
      return null;
    }
    value.forEach(data=>{
      let displayvalue='';
      if(displayFormat =='short' || !displayFormat){
        displayvalue = data['acronym'];
      }else if(displayFormat == 'long'){
        displayvalue = data['name'];
      }
      regionalBlocsName +=displayvalue+',';
    })
    return regionalBlocsName;
    
  }
}
