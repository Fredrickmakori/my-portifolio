function whyMe() {
  var paragaph = document.createElement("p");
  var element = document.createTextNode(
    "About me Hello, my name is Fredrick Makori Omwando, son to Mr. Justus Joseph Omwando. I was born on December 12th 2002 in  Mwamogesa village in Kiong'ongi  Ward Kitutu-South constittituency, of Kisii Central sub-county in Kisii Kenya.I am a son to Justus Joseph Omwando and Lilian Kerubo Ogari, I was born in a family of four where by am the eldest brother to my siblings as listed below.1.Faith Nyanchama Omwando2.Winnie Mary Mokeira Omwando3.Emmanuel Onchari OmwandoI believe therefore value family as one pillar that is very crucial in my daily endevours"
  );
  paragaph.appendChild(element);
  document.getElementById("demo").appendChild(paragaph);
}
