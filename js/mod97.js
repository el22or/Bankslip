    <script language="JavaScript">
            /* Rekurzivno izracunavanje kontrolnog broja po modulu 97 u sistemu platnog prometa 
               zasniva se na: ISO 7064 97,10 (Data processing -- Check character systems) 

               rekurzivni metod omogucava izracunavanje kontrolnog broja 
               za proizvoljno dugacke ulazne brojeve 

               (ovaj kod mozete slobodno preuzeti i koristiti u vasim aplikacijama) 

               objasnjenje rekurzivnog metoda za modul 97 preuzeto je sa: 
               http://www.cs.utsa.edu/~wagner/laws/AMod97ErrorDetection.html */
    
            function racunaj97(form) {
                var stbroj = form.tx1broj.value;
                form.nu1kbr.value = mod97(stbroj, 100);
            }

            function racunaj22(form) {
                var stbroj = form.tx1broj.value;
                form.nu2kbr.value = mod22(stbroj);;
            }

            /*  Funkcija mod97(string br, int os)
                br - ulazni broj za koji se izracunava kontrolni broj
                os - pocetna osnovica = 100 tj. racunanje krece od
                     ulaznog broja pomnozenog sa 100
                funkcija vraca integer koji predstavlja kontrolni broj */

            function mod97(br, os) {
                var c, x, kb=0;
                for (x = br.length-1; !(x < 0); x--)
                {
                    c = parseInt(br.charAt(x));
                    kb = (kb + (os * c)) % 97;
                    os = (os * 10) % 97;
                };
                kb = 98 - kb;
                return kb;
            }

            /*  Funkcija mod22(string br)
                br - ulazni broj za koji se izracunava kontrolni broj
                funkcija vraca integer koji predstavlja kontrolni broj */

            function mod22(br) {
                var c, x, y , kb=0;
                for (y = 7, x = 0; x < br.length; x++)
                {
                    c = parseInt(br.charAt(x));
                    kb = kb + (c * y);
                    y--;
                    if (y == 1) y = 7;
                };
                kb = 11 - (kb % 11);
                if (kb > 9) kb = kb - 10;
                return kb;
            }
        </script>