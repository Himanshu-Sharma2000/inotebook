import React , { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{

   const notesInitial=[
    {
      "_id": "649682f42882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
    {
      "_id": "649682fre34882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
    {
      "_id": "64968fe42882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
    {
      "_id": "6496e4rf2882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
    {
      "_id": "649682ffr2882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
    {
      "_id": "649682f4rf2882b501329c064e",
      "user": "649681592882b501329c0649",
      "title": "18 th June",
      "description": "hadd h bc sahi me   pehna kya h sab merse puchgi   or birthday pr ja rhi hu sidha bta diya  pucha tha ni ki jayu ya ni             dost jda important ho gye ab     ya uska birthday jda important ho gya      konse dost vese vo jo birthday th apr ni aye or unka bhi gusaa merpe hi uatara  sahi h bc    sahi h       dosto ne mann kr diya still i m there   vo bhi 9 bje btaya ki aa jayu me sare kam chodkr aya me or phir bhi dost   nice sahi h     mtlb   reply ye tha ki uska birthday khrb hi jayega   is that more important than relationship     dikh gya tha vo tha merko kehr  sahi h pr      hona bhi chaiye  sahi hi to h line  the more u care the more u lose             or birthday bhi kiska jo mam ke birthday pr busy the   ab kya bolu ise       kya hi bolna  feminsim aa jayega bich me na     koi na badiya  h ji   honaa bhi chaiye esa hi          and who the hell gave her right to cut my call   what i m tht fucking time    a dustbinn??    or a toy    .      arguments bhi ti bhot shi the dost h  dost ka birthday khrb ho jayega  vhi dsot na jo bc birthday pe aye tk ni      hates off to your frnds mam hats off  me hi padashi chituya h          or promises ki baaat to ni hi karu to acha hh   bhot ache prmoises the     2din vale hi  as expeted         aj 22 june hh   its 11 months completed    but the fucking care  to mam   mam ke dost h  dost important hote h mera kya h chutia hu    aayuga jyaug dost sath rehege      hamhss    jo sale time padne ye to the ni kabhi tere liye hi available ya phir  aate hi ni the      meri aadat the guu khane ki vo too   one  more thing         mene characterless bola hi ni tha tune khud hi mtlb nikal liya tha mene bass ghu khane k ais sesne me hi bola tha ki birthday pr vo aya ni or uske birthday pe sidha order ki jayuga me   car ka itna shok   or hn shur s h vo to kabhi senior drop kr rha hota h  kabhi uska birthday jda important hota jo sla aya tk ni  ",
      "tag": "personal",
      "date": "2023-06-24T05:45:24.040Z",
      "__v": 0
    },
  ]

 const [notes, setNotes] = useState(notesInitial)

 return (

     <NoteContext.Provider value={ {notes , setNotes}}>
     {props.children}
     </NoteContext.Provider>


 )


}

export default NoteState;