import GO from "../model/go.model.js";;

class GOController
{

    parse(data)
    {
        var split = data.split("|");
        var gi = new GO();
        for(const s of split)
        {
            if(s.startsWith("G#"))
            {
                gi.gno=s.replace('G#','');
            }
            else if(s.startsWith("RN"))
            {
                gi.rn=s.replace('RN','');
            }
            else if(s.startsWith("GS"))
            {
                gi.gs=s.replace('GS','');
            }
           
            else if(s.startsWith("DA"))
            {
                gi.da=s.replace('DA','');
            }
           
            else if(s.startsWith("SF"))
            {
                gi.sf=s.replace('SF','');
            }
           
            else if(s.startsWith("TI"))
            {
                gi.ti=s.replace('TI','');
            }
           
            else if(s.startsWith("WS"))
            {
                gi.ws=s.replace('WS','');
            }
           
           
        }
        return gi;
    }




}
const goController =new  GOController();
export default goController;