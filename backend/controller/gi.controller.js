import GI from "../model/gi.model.js";


class GIController
{

    parse(data)
    {
        var split = data.split("|");
        var gi = new GI();
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
            else if(s.startsWith("A0"))
            {
                gi.a0=s.replace('A0','');
            }
            else if(s.startsWith("A1"))
            {
                gi.a1=s.replace('A1','');
            }
            else if(s.startsWith("A2"))
            {
                gi.a2=s.replace('A2','');
            }
            else if(s.startsWith("A3"))
            {
                gi.a3=s.replace('A3','');
            }
            else if(s.startsWith("A4"))
            {
                gi.a4=s.replace('A4','');
            }
            else if(s.startsWith("A5"))
            {
                gi.a5=s.replace('A5','');
            }
            else if(s.startsWith("A6"))
            {
                gi.a6=s.replace('A6','');
            }
            else if(s.startsWith("A7"))
            {
                gi.a7=s.replace('A7','');
            }
            else if(s.startsWith("A8"))
            {
                gi.a8=s.replace('A8','');
            }
            else if(s.startsWith("A9"))
            {
                gi.a9=s.replace('A9','');
            }
            else if(s.startsWith("CS"))
            {
                gi.cs=s.replace('CS','');
            }
            else if(s.startsWith("DA"))
            {
                gi.da=s.replace('DA','');
            }
            else if(s.startsWith("G+"))
            {
                gi.gPlus=s.replace('G+','');
            }
            else if(s.startsWith("GA"))
            {
                gi.ga=s.replace('GA','');
            }
            else if(s.startsWith("GD"))
            {
                gi.gd=s.replace('GD','');
            }
            else if(s.startsWith("GG"))
            {
                gi.gg=s.replace('GG','');
            }
            else if(s.startsWith("GL"))
            {
                gi.gl=s.replace('GL','');
            }
            else if(s.startsWith("GN"))
            {
                gi.gn=s.replace('GN','');
            }
            else if(s.startsWith("GT"))
            {
                gi.gt=s.replace('GT','');
            }
            else if(s.startsWith("GV"))
            {
                gi.gv=s.replace('GV','');
            }
            else if(s.startsWith("MR"))
            {
                gi.mr=s.replace('MR','');
            }
            else if(s.startsWith("NP"))
            {
                gi.np=s.replace('NP','');
            }
            else if(s.startsWith("SF"))
            {
                gi.sf=s.replace('SF','');
            }
            else if(s.startsWith("TI"))
            {
                gi.ti=s.replace('TI','');
            }
            else if(s.startsWith("TV"))
            {
                gi.tv=s.replace('TV','');
            }
            else if(s.startsWith("VR"))
            {
                gi.vr=s.replace('VR','');
            }
            else if(s.startsWith("WS"))
            {
                gi.ws=s.replace('WS','');
            }
        }
        return gi;
    }




}
const giController =new  GIController();
export default giController;