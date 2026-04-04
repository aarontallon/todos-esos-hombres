/**
 * TODOS ESOS HOMBRES — Sistema de internacionalización (i18n)
 * Lenguas oficiales del Reino de España:
 *   es — Castellano
 *   ca — Català
 *   gl — Galego
 *   eu — Euskara
 *   oc — Aranés (Occitano)
 */

(function() {
    'use strict';

    const LANGS = ['es', 'ca', 'gl', 'eu', 'oc'];
    const LANG_NAMES = {
        es: 'Castellano',
        ca: 'Català',
        gl: 'Galego',
        eu: 'Euskara',
        oc: 'Aranés'
    };
    const LANG_FLAGS = {
        es: '🇪🇸',
        ca: '🏴',
        gl: '🏴',
        eu: '🏴',
        oc: '🏔️'
    };

    // =========================================================================
    // TRANSLATIONS DICTIONARY
    // =========================================================================
    const T = {

        // — NAV —
        'nav.inicio':          { es: 'INICIO', ca: 'INICI', gl: 'INICIO', eu: 'HASIERA', oc: 'INICI' },
        'nav.estadisticas':    { es: 'ESTADÍSTICAS', ca: 'ESTADÍSTIQUES', gl: 'ESTATÍSTICAS', eu: 'ESTATISTIKAK', oc: 'ESTADISTIQUES' },
        'nav.asimetrias':      { es: 'ASIMETRÍAS', ca: 'ASIMETRIES', gl: 'ASIMETRÍAS', eu: 'ASIMETRIAK', oc: 'ASIMETRIES' },
        'nav.blog':            { es: 'BLOG', ca: 'BLOG', gl: 'BLOG', eu: 'BLOGA', oc: 'BLOG' },
        'nav.proposito':       { es: 'PROPÓSITO', ca: 'PROPÒSIT', gl: 'PROPÓSITO', eu: 'HELBURUA', oc: 'ÒBÒBJECTIU' },

        // — FOOTER —
        'footer.copy':         { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: INE, SEPE, MINISTERIO DE TRABAJO', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: INE, SEPE, MINISTERI DE TREBALL', gl: 'TODOS ESES HOMES © 2026 — FONTES: INE, SEPE, MINISTERIO DE TRABALLO', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: INE, SEPE, LAN MINISTERIOA', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: INE, SEPE, MINISTÈRI DE TRABALH' },
        'footer.copy.short':   { es: 'TODOS ESOS HOMBRES © 2026', ca: 'TOTS AQUELLS HOMES © 2026', gl: 'TODOS ESES HOMES © 2026', eu: 'GIZON HORIEK GUZTIAK © 2026', oc: 'TOTS AQUETHS ÒMES © 2026' },
        'footer.copy.insst':   { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: INE, INSST, MINISTERIO DE TRABAJO', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: INE, INSST, MINISTERI DE TREBALL', gl: 'TODOS ESES HOMES © 2026 — FONTES: INE, INSST, MINISTERIO DE TRABALLO', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: INE, INSST, LAN MINISTERIOA', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: INE, INSST, MINISTÈRI DE TRABALH' },

        // =====================================================================
        // INDEX PAGE
        // =====================================================================
        'index.hero.title':    { es: 'LA REALIDAD<br>QUE NADIE CUENTA', ca: 'LA REALITAT<br>QUE NINGÚ EXPLICA', gl: 'A REALIDADE<br>QUE NINGUÉN CONTA', eu: 'INORK<br>KONTATZEN EZ DUEN ERREALITATEA', oc: 'LA REALITAT<br>QUE DEGUN CÒNTE' },
        'index.hero.subtitle': { es: 'Datos oficiales sobre las áreas donde los hombres sufren más, mueren más y reciben menos atención', ca: 'Dades oficials sobre les àrees on els homes pateixen més, moren més i reben menys atenció', gl: 'Datos oficiais sobre as áreas onde os homes sofren máis, morren máis e reciben menos atención', eu: 'Gizonak gehiago sufritzen, gehiago hiltzen eta arreta gutxiago jasotzen duten arloei buruzko datu ofizialak', oc: 'Donades oficiau sus las arees on los òmes soòfren mès, mòren mès e receben mens atencion' },
        'index.stat1.number':  { es: '75%', ca: '75%', gl: '75%', eu: '%75', oc: '75%' },
        'index.stat1.label':   { es: 'De los suicidios<br>son masculinos', ca: 'Dels suïcidis<br>són masculins', gl: 'Dos suicidios<br>son masculinos', eu: 'Suizidioetatik<br>gizonezkoak dira', oc: 'Deus suïcidis<br>son masculins' },
        'index.stat2.number':  { es: '91%', ca: '91%', gl: '91%', eu: '%91', oc: '91%' },
        'index.stat2.label':   { es: 'De muertes laborales<br>son hombres', ca: 'De morts laborals<br>són homes', gl: 'De mortes laborais<br>son homes', eu: 'Lan-heriotzak<br>gizonak dira', oc: 'De mòrts laboraus<br>son òmes' },
        'index.stat3.number':  { es: '80%', ca: '80%', gl: '80%', eu: '%80', oc: '80%' },
        'index.stat3.label':   { es: 'De personas sin hogar<br>son hombres', ca: 'De persones sense llar<br>són homes', gl: 'De persoas sen fogar<br>son homes', eu: 'Etxerik gabekoak<br>gizonak dira', oc: 'De persònes sense har<br>son òmes' },

        'index.data1.number':  { es: '93%', ca: '93%', gl: '93%', eu: '%93', oc: '93%' },
        'index.data1.text':    { es: 'De las personas presas en España son hombres. El sistema penitenciario es masculino en su inmensa mayoría.', ca: 'De les persones preses a Espanya són homes. El sistema penitenciari és masculí en la seva immensa majoria.', gl: 'Das persoas presas en España son homes. O sistema penitenciario é masculino na súa inmensa maioría.', eu: 'Espainiako presondegietako pertsonak gizonak dira. Espetxe-sistema maskulinoa da neurri handi batean.', oc: 'Deras persònes preses en Espanha son òmes. Lo sistèma penitenciari ei masculin en sa immensa majoritat.' },
        'index.data2.number':  { es: '526', ca: '526', gl: '526', eu: '526', oc: '526' },
        'index.data2.text':    { es: 'Asimetrías legales documentadas del BOE que discriminan explícitamente por sexo en contra de los hombres.', ca: 'Asimetries legals documentades del BOE que discriminen explícitament per sexe en contra dels homes.', gl: 'Asimetrías legais documentadas do BOE que discriminan explicitamente por sexo en contra dos homes.', eu: 'BOEko dokumentatutako legezko asimetria sexuagatik gizonen aurka diskriminatzen dutenak.', oc: 'Asimetries legaus documentades deu BOE que discriminen explicitament per sèxe contra los òmes.' },
        'index.data3.number':  { es: '-6', ca: '-6', gl: '-6', eu: '-6', oc: '-6' },
        'index.data3.text':    { es: 'Años de esperanza de vida menos que las mujeres. Los hombres mueren antes de forma sistemática.', ca: 'Anys d\'esperança de vida menys que les dones. Els homes moren abans de forma sistemàtica.', gl: 'Anos de esperanza de vida menos que as mulleres. Os homes morren antes de forma sistemática.', eu: 'Bizi-itxaropen urteak emakumeek baino gutxiago. Gizonak sistematikoki lehenago hiltzen dira.', oc: 'Ans d\'esperança de vida mens que las hemnes. Los òmes mòren abans de forma sistematica.' },

        'index.mission.title': { es: 'UNA REALIDAD QUE EXISTE', ca: 'UNA REALITAT QUE EXISTEIX', gl: 'UNHA REALIDADE QUE EXISTE', eu: 'EXISTITZEN DEN ERREALITATE BAT', oc: 'UNA REALITAT QU\'EXISTEISH' },
        'index.mission.p1':    { es: 'En España, <span class="highlight">cada día se suicidan 8 hombres</span>. Cada día mueren 2 hombres en accidentes laborales. Cada noche, 3 de cada 4 personas durmiendo en la calle son hombres.', ca: 'A Espanya, <span class="highlight">cada dia se suïciden 8 homes</span>. Cada dia moren 2 homes en accidents laborals. Cada nit, 3 de cada 4 persones dormint al carrer són homes.', gl: 'En España, <span class="highlight">cada día suicídanse 8 homes</span>. Cada día morren 2 homes en accidentes laborais. Cada noite, 3 de cada 4 persoas durmindo na rúa son homes.', eu: 'Espainian, <span class="highlight">egunero 8 gizon bere burua hiltzen du</span>. Egunero 2 gizon lan-istripuetan hiltzen dira. Gauero, kalean lo egiten duten 4 pertsonatik 3 gizonak dira.', oc: 'En Espanha, <span class="highlight">cada dia se suïciden 8 òmes</span>. Cada dia mòren 2 òmes en accidènts laboraus. Cada neit, 3 de cada 4 persònes dormint en carrèra son òmes.' },
        'index.mission.p2':    { es: 'Estos datos no son opiniones. Son estadísticas oficiales del Instituto Nacional de Estadística, del Ministerio de Trabajo, del Instituto Nacional de Seguridad y Salud en el Trabajo.', ca: 'Aquestes dades no són opinions. Són estadístiques oficials de l\'Institut Nacional d\'Estadística, del Ministeri de Treball, de l\'Institut Nacional de Seguretat i Salut en el Treball.', gl: 'Estes datos non son opinións. Son estatísticas oficiais do Instituto Nacional de Estatística, do Ministerio de Traballo, do Instituto Nacional de Seguridade e Saúde no Traballo.', eu: 'Datu hauek ez dira iritziak. Estatistika Nazionaleko Institutuaren, Lan Ministerioaren eta Laneko Segurtasun eta Osasun Institutu Nazionalaren estatistika ofizialak dira.', oc: 'Aqueras donades non son opinions. Son estadistiques oficiau de l\'Institut Nacional d\'Estadistica, deu Ministèri de Trabalh, de l\'Institut Nacional de Seguretat e Salut en eth Òòbòr.' },
        'index.mission.p3':    { es: 'Esta web existe para <span class="highlight">visibilizar lo invisible</span>. Para documentar, con fuentes oficiales y datos verificables, las áreas donde los hombres enfrentan desventajas sistemáticas, sufren más, mueren más, y reciben menos atención.', ca: 'Aquesta web existeix per <span class="highlight">visibilitzar l\'invisible</span>. Per documentar, amb fonts oficials i dades verificables, les àrees on els homes enfronten desavantatges sistemàtics, pateixen més, moren més i reben menys atenció.', gl: 'Esta web existe para <span class="highlight">visibilizar o invisible</span>. Para documentar, con fontes oficiais e datos verificables, as áreas onde os homes enfrontan desvantaxes sistemáticas, sofren máis, morren máis e reciben menos atención.', eu: 'Webgune hau <span class="highlight">ikusezina ikusarazteko</span> existitzen da. Iturri ofizialekin eta datu egiaztagarriekin dokumentatzeko gizonek desabantaila sistematikoak dituzten arloak, gehiago sufritzen duten, gehiago hiltzen diren eta arreta gutxiago jasotzen duten arloak.', oc: 'Aquera web existeish entà <span class="highlight">visibilizar l\'invisible</span>. Entà documentar, damb fonts oficiau e donades verificables, las arees on los òmes afronten desavantatges sistematics, soòfren mès, mòren mès e receben mens atencion.' },
        'index.mission.p4':    { es: 'No es un concurso de víctimas. Es un ejercicio de honestidad. Porque la igualdad real requiere mirar toda la realidad, no solo la mitad que nos resulta cómoda.', ca: 'No és un concurs de víctimes. És un exercici d\'honestedat. Perquè la igualtat real requereix mirar tota la realitat, no només la meitat que ens resulta còmoda.', gl: 'Non é un concurso de vítimas. É un exercicio de honestidade. Porque a igualdade real require mirar toda a realidade, non só a metade que nos resulta cómoda.', eu: 'Ez da biktimen lehiaketa bat. Zintzotasun-ariketa bat da. Benetako berdintasunak errealitate osoa begiratzea eskatzen duelako, ez erosoa zaigun erdia soilik.', oc: 'Non ei un concors de victimes. Ei un exercici d\'honestetòat. Perque l\'egalitat reala demòande mirar tota la realitat, non solament la meitat que nos ei comòde.' },

        'index.cta.title':     { es: 'EXPLORA LOS DATOS', ca: 'EXPLORA LES DADES', gl: 'EXPLORA OS DATOS', eu: 'ESPLORATU DATUAK', oc: 'EXPLÒRA LAS DONADES' },
        'index.cta.stats':     { es: 'VER ESTADÍSTICAS', ca: 'VEURE ESTADÍSTIQUES', gl: 'VER ESTATÍSTICAS', eu: 'IKUSI ESTATISTIKAK', oc: 'VÉDER ESTADISTIQUES' },
        'index.cta.asym':      { es: 'ASIMETRÍAS LEGALES', ca: 'ASIMETRIES LEGALS', gl: 'ASIMETRÍAS LEGAIS', eu: 'LEGEZKO ASIMETRIAK', oc: 'ASIMETRIES LEGAUS' },

        // =====================================================================
        // ESTADÍSTICAS PAGE
        // =====================================================================
        'est.title':           { es: 'ESTADÍSTICAS', ca: 'ESTADÍSTIQUES', gl: 'ESTATÍSTICAS', eu: 'ESTATISTIKAK', oc: 'ESTADISTIQUES' },
        'est.subtitle':        { es: 'Datos oficiales del INE, Ministerio de Trabajo, INSST y otras fuentes gubernamentales sobre áreas donde los hombres enfrentan desventajas sistemáticas.', ca: 'Dades oficials de l\'INE, Ministeri de Treball, INSST i altres fonts governamentals sobre àrees on els homes enfronten desavantatges sistemàtics.', gl: 'Datos oficiais do INE, Ministerio de Traballo, INSST e outras fontes gobernamentais sobre áreas onde os homes enfrontan desvantaxes sistemáticas.', eu: 'INEren, Lan Ministerioaren, INSSTren eta beste gobernu-iturrietako datu ofizialak gizonek desabantaila sistematikoak dituzten arloei buruz.', oc: 'Donades oficiau de l\'INE, Ministèri de Trabalh, INSST e autes fonts governamentaus sus arees on los òmes afronten desavantatges sistematics.' },
        'est.btn.enviar':      { es: '+ Enviar Datos', ca: '+ Enviar Dades', gl: '+ Enviar Datos', eu: '+ Datuak Bidali', oc: '+ Enviar Donades' },

        'est.cat.salud':       { es: 'Salud Mental', ca: 'Salut Mental', gl: 'Saúde Mental', eu: 'Osasun Mentala', oc: 'Salut Mentala' },
        'est.s1.label':        { es: 'De los suicidios son masculinos', ca: 'Dels suïcidis són masculins', gl: 'Dos suicidios son masculinos', eu: 'Suizidioetatik gizonezkoak dira', oc: 'Deus suïcidis son masculins' },
        'est.s1.desc':         { es: 'En 2024, 3.953 personas murieron por suicidio en España. 2.902 eran hombres (73,4%). Cada día, 8 hombres se suicidan en España.', ca: 'El 2024, 3.953 persones van morir per suïcidi a Espanya. 2.902 eren homes (73,4%). Cada dia, 8 homes se suïciden a Espanya.', gl: 'En 2024, 3.953 persoas morreron por suicidio en España. 2.902 eran homes (73,4%). Cada día, 8 homes suicídanse en España.', eu: '2024an, 3.953 pertsonak bere burua hil zuten Espainian. 2.902 gizonak ziren (%73,4). Egunero, 8 gizonek bere burua hiltzen dute Espainian.', oc: 'En 2024, 3.953 persònes moriren per suïcidi en Espanha. 2.902 èren òmes (73,4%). Cada dia, 8 òmes se suïciden en Espanha.' },
        'est.s1.source':       { es: 'Fuente: INE, Ministerio de Sanidad', ca: 'Font: INE, Ministeri de Sanitat', gl: 'Fonte: INE, Ministerio de Sanidade', eu: 'Iturria: INE, Osasun Ministerioa', oc: 'Font: INE, Ministèri de Sanitat' },

        'est.cat.laboral':     { es: 'Seguridad Laboral', ca: 'Seguretat Laboral', gl: 'Seguridade Laboral', eu: 'Lan Segurtasuna', oc: 'Seguretat Laborala' },
        'est.s2.label':        { es: 'De muertes laborales son hombres', ca: 'De morts laborals són homes', gl: 'De mortes laborais son homes', eu: 'Lan-heriotzak gizonak dira', oc: 'De mòrts laboraus son òmes' },
        'est.s2.desc':         { es: 'En 2023, 746 personas murieron en accidentes de trabajo. 679 eran hombres. Cada día, 2 hombres mueren en el lugar de trabajo.', ca: 'El 2023, 746 persones van morir en accidents de treball. 679 eren homes. Cada dia, 2 homes moren al lloc de treball.', gl: 'En 2023, 746 persoas morreron en accidentes de traballo. 679 eran homes. Cada día, 2 homes morren no lugar de traballo.', eu: '2023an, 746 pertsonak lan-istripuetan hil ziren. 679 gizonak ziren. Egunero, 2 gizon lantokian hiltzen dira.', oc: 'En 2023, 746 persònes moriren en accidènts de trabalh. 679 èren òmes. Cada dia, 2 òmes mòren en lòc de trabalh.' },
        'est.s2.source':       { es: 'Fuente: INSST, Ministerio de Trabajo', ca: 'Font: INSST, Ministeri de Treball', gl: 'Fonte: INSST, Ministerio de Traballo', eu: 'Iturria: INSST, Lan Ministerioa', oc: 'Font: INSST, Ministèri de Trabalh' },

        'est.cat.exclusion':   { es: 'Exclusión Social', ca: 'Exclusió Social', gl: 'Exclusión Social', eu: 'Gizarte Bazterketa', oc: 'Exclusion Sociala' },
        'est.s3.label':        { es: 'De personas sin hogar son hombres', ca: 'De persones sense llar són homes', gl: 'De persoas sen fogar son homes', eu: 'Etxerik gabekoak gizonak dira', oc: 'De persònes sense har son òmes' },
        'est.s3.desc':         { es: 'Según el INE, de las personas en situación de sin hogarismo en España, aproximadamente el 80% son hombres.', ca: 'Segons l\'INE, de les persones en situació de sensellarisme a Espanya, aproximadament el 80% són homes.', gl: 'Segundo o INE, das persoas en situación de sen fogarismo en España, aproximadamente o 80% son homes.', eu: 'INEren arabera, Espainiako etxerik gabeko egoerako pertsonen artean, gutxi gorabehera %80 gizonak dira.', oc: 'Segon l\'INE, deras persònes en situacion de sense-llarisme en Espanha, aproximadament lo 80% son òmes.' },
        'est.s3.source':       { es: 'Fuente: INE, Encuesta sobre personas sin hogar', ca: 'Font: INE, Enquesta sobre persones sense llar', gl: 'Fonte: INE, Enquisa sobre persoas sen fogar', eu: 'Iturria: INE, Etxerik gabeko pertsonei buruzko inkesta', oc: 'Font: INE, Enquèsta sus persònes sense har' },

        'est.cat.penit':       { es: 'Sistema Penitenciario', ca: 'Sistema Penitenciari', gl: 'Sistema Penitenciario', eu: 'Espetxe Sistema', oc: 'Sistèma Penitenciari' },
        'est.s4.label':        { es: 'De la población reclusa son hombres', ca: 'De la població reclusa són homes', gl: 'Da poboación reclusa son homes', eu: 'Preso populazioa gizonak dira', oc: 'Dera poblacion reclusa son òmes' },
        'est.s4.desc':         { es: 'De las aproximadamente 60.000 personas en prisión en España, más de 55.000 son hombres. El sistema penitenciario es abrumadoramente masculino.', ca: 'De les aproximadament 60.000 persones a la presó a Espanya, més de 55.000 són homes. El sistema penitenciari és aclaparadorament masculí.', gl: 'Das aproximadamente 60.000 persoas en prisión en España, máis de 55.000 son homes. O sistema penitenciario é abafadoramente masculino.', eu: 'Espainiako kartzelan dauden gutxi gorabehera 60.000 pertsonatik, 55.000 baino gehiago gizonak dira. Espetxe-sistema nabarmenki maskulinoa da.', oc: 'Deras aproximadament 60.000 persònes en preson en Espanha, mès de 55.000 son òmes. Lo sistèma penitenciari ei predominantament masculin.' },
        'est.s4.source':       { es: 'Fuente: Ministerio del Interior, SGIP', ca: 'Font: Ministeri de l\'Interior, SGIP', gl: 'Fonte: Ministerio do Interior, SGIP', eu: 'Iturria: Barne Ministerioa, SGIP', oc: 'Font: Ministèri de l\'Interior, SGIP' },

        'est.cat.vida':        { es: 'Esperanza de Vida', ca: 'Esperança de Vida', gl: 'Esperanza de Vida', eu: 'Bizi-Itxaropena', oc: 'Esperança de Vida' },
        'est.s5.label':        { es: 'Años menos de esperanza de vida', ca: 'Anys menys d\'esperança de vida', gl: 'Anos menos de esperanza de vida', eu: 'Bizi-itxaropen urte gutxiago', oc: 'Ans mens d\'esperança de vida' },
        'est.s5.desc':         { es: 'Los hombres viven de media 6 años menos que las mujeres en España. Una brecha que persiste desde hace décadas.', ca: 'Els homes viuen de mitjana 6 anys menys que les dones a Espanya. Una bretxa que persisteix des de fa dècades.', gl: 'Os homes viven de media 6 anos menos que as mulleres en España. Unha fenda que persiste desde hai décadas.', eu: 'Gizonek batez beste 6 urte gutxiago bizi dira emakumeek baino Espainian. Hamarkadak daramatzaten arrakala bat.', oc: 'Los òmes viven de mejana 6 ans mens que las hemnes en Espanha. Ua bretxa que persisteish dempús de decades.' },
        'est.s5.source':       { es: 'Fuente: INE, Indicadores demográficos', ca: 'Font: INE, Indicadors demogràfics', gl: 'Fonte: INE, Indicadores demográficos', eu: 'Iturria: INE, Adierazle demografikoak', oc: 'Font: INE, Indicadors demografics' },

        'est.cat.edu':         { es: 'Educación', ca: 'Educació', gl: 'Educación', eu: 'Hezkuntza', oc: 'Educacion' },
        'est.s6.label':        { es: 'De graduados universitarios son hombres', ca: 'De graduats universitaris són homes', gl: 'De graduados universitarios son homes', eu: 'Unibertsitateko graduatuak gizonak dira', oc: 'De graduats universitaris son òmes' },
        'est.s6.desc':         { es: 'Los hombres representan solo el 41% de los graduados universitarios en España. La brecha educativa se ha invertido.', ca: 'Els homes representen només el 41% dels graduats universitaris a Espanya. La bretxa educativa s\'ha invertit.', gl: 'Os homes representan só o 41% dos graduados universitarios en España. A fenda educativa inverteuse.', eu: 'Gizonek Espainiako unibertsitateko graduatuen %41 soilik ordezkatzen dute. Hezkuntza-arrakala alderantzikatu da.', oc: 'Los òmes representen solament lo 41% deus graduats universitaris en Espanha. La bretxa educativa s\'a invertit.' },
        'est.s6.source':       { es: 'Fuente: Ministerio de Universidades, INE', ca: 'Font: Ministeri d\'Universitats, INE', gl: 'Fonte: Ministerio de Universidades, INE', eu: 'Iturria: Unibertsitate Ministerioa, INE', oc: 'Font: Ministèri d\'Universitats, INE' },

        'est.coming.title':    { es: 'MÁS ESTADÍSTICAS PRÓXIMAMENTE', ca: 'MÉS ESTADÍSTIQUES PROPERAMENT', gl: 'MÁIS ESTATÍSTICAS PROXIMAMENTE', eu: 'ESTATISTIKA GEHIAGO LASTER', oc: 'MÈS ESTADISTIQUES PRÒXIMAMENT' },
        'est.coming.text':     { es: 'Estamos recopilando y verificando más datos oficiales sobre siniestralidad laboral, fracaso escolar, custodia de menores, violencia doméstica, adicciones y otras áreas donde existen asimetrías documentadas.', ca: 'Estem recopilant i verificant més dades oficials sobre sinistralitat laboral, fracàs escolar, custòdia de menors, violència domèstica, addiccions i altres àrees on existeixen asimetries documentades.', gl: 'Estamos recompilando e verificando máis datos oficiais sobre sinistralidade laboral, fracaso escolar, custodia de menores, violencia doméstica, adiccións e outras áreas onde existen asimetrías documentadas.', eu: 'Datu ofizial gehiago biltzen eta egiaztatzen ari gara lan-istripuak, eskola-porrota, adingabekoen zaintza, etxeko indarkeria, adikzioak eta asimetria dokumentatuak dauden beste arlo batzuei buruz.', oc: 'Estam recopilant e verificant mès donades oficiau sus sinistralitat laborala, fracàs escolar, custòdia de minors, violéncia domèstica, addicions e autes arees on existeishen asimetries documentades.' },

        'est.form.title':      { es: 'ENVIAR NUEVA ESTADÍSTICA', ca: 'ENVIAR NOVA ESTADÍSTICA', gl: 'ENVIAR NOVA ESTATÍSTICA', eu: 'ESTATISTIKA BERRIA BIDALI', oc: 'ENVIAR NÒVA ESTADISTICA' },
        'est.form.intro':      { es: 'Si conoces una estadística oficial que no aparece aquí, envíanosla con su fuente.', ca: 'Si coneixes una estadística oficial que no apareix aquí, envia-nos-la amb la seva font.', gl: 'Se coñeces unha estatística oficial que non aparece aquí, envíanola coa súa fonte.', eu: 'Hemen agertzen ez den estatistika ofizial bat ezagutzen baduzu, bidali iezaguzu bere iturriarekin.', oc: 'Si coneishes ua estadistica oficiau que non apareish açí, envie-nos-la damb sa font.' },
        'est.form.cat':        { es: 'Categoría *', ca: 'Categoria *', gl: 'Categoría *', eu: 'Kategoria *', oc: 'Categoria *' },
        'est.form.cat.ph':     { es: 'ej: Salud, Empleo, Educación...', ca: 'ex: Salut, Ocupació, Educació...', gl: 'ex: Saúde, Emprego, Educación...', eu: 'adib: Osasuna, Enplegua, Hezkuntza...', oc: 'ex: Salut, Empleòc, Educacion...' },
        'est.form.dato':       { es: 'Dato Estadístico *', ca: 'Dada Estadística *', gl: 'Dato Estatístico *', eu: 'Datu Estatistikoa *', oc: 'Donada Estadistica *' },
        'est.form.dato.ph':    { es: 'ej: 85% de...', ca: 'ex: 85% de...', gl: 'ex: 85% de...', eu: 'adib: %85...', oc: 'ex: 85% de...' },
        'est.form.desc':       { es: 'Descripción Detallada *', ca: 'Descripció Detallada *', gl: 'Descrición Detallada *', eu: 'Deskribapen Xehatua *', oc: 'Descripcion Detalhada *' },
        'est.form.desc.ph':    { es: 'Contexto y detalles del dato...', ca: 'Context i detalls de la dada...', gl: 'Contexto e detalles do dato...', eu: 'Datuaren testuingurua eta xehetasunak...', oc: 'Contèxt e detalhs dera donada...' },
        'est.form.fuente':     { es: 'Fuente Oficial *', ca: 'Font Oficial *', gl: 'Fonte Oficial *', eu: 'Iturri Ofiziala *', oc: 'Font Oficiau *' },
        'est.form.fuente.ph':  { es: 'INE, Ministerio X, Instituto Y...', ca: 'INE, Ministeri X, Institut Y...', gl: 'INE, Ministerio X, Instituto Y...', eu: 'INE, X Ministerioa, Y Institutua...', oc: 'INE, Ministèri X, Institut Y...' },
        'est.form.enlace':     { es: 'Enlace a la Fuente', ca: 'Enllaç a la Font', gl: 'Enlace á Fonte', eu: 'Iturrirako esteka', oc: 'Ligam ara Font' },
        'est.form.submit':     { es: 'ENVIAR PARA REVISIÓN', ca: 'ENVIAR PER A REVISIÓ', gl: 'ENVIAR PARA REVISIÓN', eu: 'BERRIKUSTEKO BIDALI', oc: 'ENVIAR ENTÀ REVISION' },
        'est.form.alert':      { es: 'Función de envío en desarrollo. Gracias por tu interés en contribuir.', ca: 'Funció d\'enviament en desenvolupament. Gràcies pel teu interès a contribuir.', gl: 'Función de envío en desenvolvemento. Grazas polo teu interese en contribuír.', eu: 'Bidalketa-funtzioa garatzen. Eskerrik asko laguntzen duzun interesagatik.', oc: 'Foncion d\'enviament en desvolopament. Mercès per ton interès a contribuir.' },

        // =====================================================================
        // ASIMETRÍAS PAGE
        // =====================================================================
        'asym.title':          { es: 'ASIMETRÍAS LEGALES', ca: 'ASIMETRIES LEGALS', gl: 'ASIMETRÍAS LEGAIS', eu: 'LEGEZKO ASIMETRIAK', oc: 'ASIMETRIES LEGAUS' },
        'asym.subtitle':       { es: 'Recopilación detallada de discriminaciones legales por sexo extraídas del BOE y fuentes oficiales del Gobierno.', ca: 'Recopilació detallada de discriminacions legals per sexe extretes del BOE i fonts oficials del Govern.', gl: 'Recompilación detallada de discriminacións legais por sexo extraídas do BOE e fontes oficiais do Goberno.', eu: 'BOEtik eta Gobernuaren iturri ofizialetatik ateratako sexu-diskriminazio legalen bilduma xehatua.', oc: 'Recopilacion detalhada de discriminacions legaus per sèxe extraites deu BOE e fonts oficiau deu Govèrn.' },
        'asym.btn.enviar':     { es: '+ Enviar Asimetría', ca: '+ Enviar Asimetria', gl: '+ Enviar Asimetría', eu: '+ Asimetria Bidali', oc: '+ Enviar Asimetria' },
        'asym.search.ph':      { es: 'BUSCAR POR LEY, PALABRA CLAVE O REFERENCIA BOE...', ca: 'CERCAR PER LLEI, PARAULA CLAU O REFERÈNCIA BOE...', gl: 'BUSCAR POR LEI, PALABRA CLAVE OU REFERENCIA BOE...', eu: 'BILATU LEGEZ, HITZ GAKOZ EDO BOE ERREFERENTZIAZ...', oc: 'CERCAR PER LEI, PARAULA CLAU O REFERÉNCIA BOE...' },
        'asym.filter.todas':   { es: 'Todas', ca: 'Totes', gl: 'Todas', eu: 'Guztiak', oc: 'Totas' },
        'asym.filter.penal':   { es: 'Penal', ca: 'Penal', gl: 'Penal', eu: 'Zigor', oc: 'Penau' },
        'asym.filter.social':  { es: 'Seguridad Social', ca: 'Seguretat Social', gl: 'Seguridade Social', eu: 'Gizarte Segurantza', oc: 'Seguretat Sociala' },
        'asym.filter.empleo':  { es: 'Empleo/Empresa', ca: 'Ocupació/Empresa', gl: 'Emprego/Empresa', eu: 'Enplegua/Enpresa', oc: 'Empleòc/Empresa' },
        'asym.filter.admin':   { es: 'Admin/Varios', ca: 'Admin/Diversos', gl: 'Admin/Varios', eu: 'Admin/Hainbat', oc: 'Admin/Divòrs' },
        'asym.filter.edu':     { es: 'Educación', ca: 'Educació', gl: 'Educación', eu: 'Hezkuntza', oc: 'Educacion' },
        'asym.filter.viv':     { es: 'Vivienda', ca: 'Habitatge', gl: 'Vivenda', eu: 'Etxebizitza', oc: 'Abitatge' },
        'asym.search.titulo':  { es: 'Buscar en título', ca: 'Cercar en títol', gl: 'Buscar en título', eu: 'Izenburuan bilatu', oc: 'Cercar en títol' },
        'asym.search.desc':    { es: 'Buscar en descripción', ca: 'Cercar en descripció', gl: 'Buscar en descrición', eu: 'Deskribapenean bilatu', oc: 'Cercar en descripcion' },
        'asym.search.asym':    { es: 'Buscar en asimetría', ca: 'Cercar en asimetria', gl: 'Buscar en asimetría', eu: 'Asimetrian bilatu', oc: 'Cercar en asimetria' },
        'asym.search.ref':     { es: 'Buscar en referencia', ca: 'Cercar en referència', gl: 'Buscar en referencia', eu: 'Erreferentzian bilatu', oc: 'Cercar en referéncia' },
        'asym.noresults':      { es: 'No se encontraron resultados para tu búsqueda.', ca: 'No s\'han trobat resultats per a la teva cerca.', gl: 'Non se atoparon resultados para a túa busca.', eu: 'Ez da emaitzarik aurkitu zure bilaketarako.', oc: 'Non se son trobats resultats entà ta cèrca.' },
        'asym.form.title':     { es: 'ENVIAR NUEVA ASIMETRÍA', ca: 'ENVIAR NOVA ASIMETRIA', gl: 'ENVIAR NOVA ASIMETRÍA', eu: 'ASIMETRIA BERRIA BIDALI', oc: 'ENVIAR NÒVA ASIMETRIA' },
        'asym.form.intro':     { es: 'Si conoces una ley oficial que falte, envíala indicando la referencia del BOE.', ca: 'Si coneixes una llei oficial que falti, envia-la indicant la referència del BOE.', gl: 'Se coñeces unha lei oficial que falte, envíaa indicando a referencia do BOE.', eu: 'Falta den lege ofizial bat ezagutzen baduzu, bidali BOE erreferentzia adieraziz.', oc: 'Si coneishes ua lei oficiau que manque, envie-la indicant la referéncia deu BOE.' },
        'asym.form.ley':       { es: 'Título de la Ley *', ca: 'Títol de la Llei *', gl: 'Título da Lei *', eu: 'Legearen Izenburua *', oc: 'Títol dera Lei *' },
        'asym.form.desc':      { es: 'Descripción Detallada *', ca: 'Descripció Detallada *', gl: 'Descrición Detallada *', eu: 'Deskribapen Xehatua *', oc: 'Descripcion Detalhada *' },
        'asym.form.enlace':    { es: 'Enlace BOE / Oficial *', ca: 'Enllaç BOE / Oficial *', gl: 'Enlace BOE / Oficial *', eu: 'BOE / Esteka Ofiziala *', oc: 'Ligam BOE / Oficiau *' },
        'asym.form.submit':    { es: 'ENVIAR PARA REVISIÓN', ca: 'ENVIAR PER A REVISIÓ', gl: 'ENVIAR PARA REVISIÓN', eu: 'BERRIKUSTEKO BIDALI', oc: 'ENVIAR ENTÀ REVISION' },
        'asym.card.contexto':  { es: 'Contexto Oficial:', ca: 'Context Oficial:', gl: 'Contexto Oficial:', eu: 'Testuinguru Ofiziala:', oc: 'Contèxt Oficiau:' },
        'asym.card.asimetria': { es: 'La Asimetría Legal:', ca: 'L\'Asimetria Legal:', gl: 'A Asimetría Legal:', eu: 'Legezko Asimetria:', oc: 'L\'Asimetria Legau:' },
        'asym.card.fuente':    { es: 'FUENTE:', ca: 'FONT:', gl: 'FONTE:', eu: 'ITURRIA:', oc: 'FONT:' },
        'asym.results':        { es: 'Se encontraron {n} resultado{s} para "{q}"', ca: 'S\'han trobat {n} resultat{s} per a "{q}"', gl: 'Atopáronse {n} resultado{s} para "{q}"', eu: '{n} emaitza aurkitu d{s2}ra "{q}" bilaketarako', oc: 'Se son trobat{s} {n} resultat{s} entà "{q}"' },
        'asym.form.alert':     { es: 'Función de envío en desarrollo. Gracias por tu interés en contribuir.', ca: 'Funció d\'enviament en desenvolupament. Gràcies pel teu interès a contribuir.', gl: 'Función de envío en desenvolvemento. Grazas polo teu interese en contribuír.', eu: 'Bidalketa-funtzioa garatzen. Eskerrik asko laguntzen duzun interesagatik.', oc: 'Foncion d\'enviament en desvolopament. Mercès per ton interès a contribuir.' },

        // =====================================================================
        // PROPÓSITO PAGE
        // =====================================================================
        'prop.title':          { es: 'NUESTRO<br>PROPÓSITO', ca: 'EL NOSTRE<br>PROPÒSIT', gl: 'O NOSO<br>PROPÓSITO', eu: 'GURE<br>HELBURUA', oc: 'NÒSTE<br>OBJECTIU' },
        'prop.manifesto.p1':   { es: 'Esta plataforma nace de una observación incómoda: existen realidades que, a pesar de estar respaldadas por datos oficiales, permanecen en la periferia del debate público.', ca: 'Aquesta plataforma neix d\'una observació incòmoda: existeixen realitats que, malgrat estar recolzades per dades oficials, romanen a la perifèria del debat públic.', gl: 'Esta plataforma nace dunha observación incómoda: existen realidades que, a pesar de estar respaldadas por datos oficiais, permanecen na periferia do debate público.', eu: 'Plataforma hau behaketa deserosotik sortzen da: datu ofizialek babesten dituzten arren, eztabaida publikoaren periferian geratzen diren errealitateak existitzen dira.', oc: 'Aquera platafòrma neish d\'ua observacion incòmoda: existeishen realitats que, malgrat estar sostenudes per donades oficiau, demòren en periferia deu debat public.' },
        'prop.manifesto.hl':   { es: 'No buscamos crear un discurso de confrontación, sino completar el mapa de la realidad social con los datos que faltan.', ca: 'No busquem crear un discurs de confrontació, sinó completar el mapa de la realitat social amb les dades que falten.', gl: 'Non buscamos crear un discurso de confrontación, senón completar o mapa da realidade social cos datos que faltan.', eu: 'Ez dugu konfrontazio-diskurtsoa sortu nahi, gizarte-errealitatearen mapa falta diren datuekin osatu baizik.', oc: 'Non cercam crear un discors de confrontacion, sinon completar lo mapa dera realitat sociala damb las donades que manquen.' },
        'prop.manifesto.p2':   { es: 'Cuando los datos muestran que los hombres son la inmensa mayoría de las víctimas en suicidios, accidentes laborales o sinhogarismo, ignorar el factor de género no es neutralidad; es invisibilización.', ca: 'Quan les dades mostren que els homes són la immensa majoria de les víctimes en suïcidis, accidents laborals o sensellarisme, ignorar el factor de gènere no és neutralitat; és invisibilització.', gl: 'Cando os datos mostran que os homes son a inmensa maioría das vítimas en suicidios, accidentes laborais ou senfogarismo, ignorar o factor de xénero non é neutralidade; é invisibilización.', eu: 'Datuek erakusten dutenean gizonak suizidioetan, lan-istripuetan edo etxegabetasunean biktimen gehiengo handia direla, genero-faktorea ezikustea ez da neutraltasuna; ikusezin bihurtzea da.', oc: 'Quan las donades mòstren que los òmes son l\'immensa majoritat deras victimes en suïcidis, accidènts laboraus o sense-llarisme, ignorar lo factor de gènòer non ei neutralitat; ei invisibilizacion.' },

        'prop.principios.title': { es: 'Principios Fundamentales', ca: 'Principis Fonamentals', gl: 'Principios Fundamentais', eu: 'Oinarrizko Printzipioak', oc: 'Principis Fondamentaus' },
        'prop.p1.title':       { es: '01. DATOS', ca: '01. DADES', gl: '01. DATOS', eu: '01. DATUAK', oc: '01. DONADES' },
        'prop.p1.text':        { es: 'Solo utilizamos fuentes oficiales: INE, Ministerios, BOE. La realidad no es una opinión.', ca: 'Només utilitzem fonts oficials: INE, Ministeris, BOE. La realitat no és una opinió.', gl: 'Só utilizamos fontes oficiais: INE, Ministerios, BOE. A realidade non é unha opinión.', eu: 'Iturri ofizialak soilik erabiltzen ditugu: INE, Ministerioak, BOE. Errealitatea ez da iritzi bat.', oc: 'Solament utilizam fonts oficiau: INE, Ministèris, BOE. La realitat non ei ua opinion.' },
        'prop.p2.title':       { es: '02. VISIBILIDAD', ca: '02. VISIBILITAT', gl: '02. VISIBILIDADE', eu: '02. IKUSGARRITASUNA', oc: '02. VISIBILITAT' },
        'prop.p2.text':        { es: 'Hacer que el dolor y la precariedad masculina dejen de ser un "suceso aislado" para verse como un problema estructural.', ca: 'Fer que el dolor i la precarietat masculina deixin de ser un "succés aïllat" per veure\'s com un problema estructural.', gl: 'Facer que a dor e a precariedade masculina deixen de ser un "suceso illado" para verse como un problema estrutural.', eu: 'Gizonezko mina eta prekarietatea "gertaera isolatu" izateari utzi eta arazo estrukturala bezala ikustea.', oc: 'Hèr que la dolor e la precarietat masculina dèishen d\'èster un "succès isolat" entà\'s véder coma un problèma estructurau.' },
        'prop.p3.title':       { es: '03. HONESTIDAD', ca: '03. HONESTEDAT', gl: '03. HONESTIDADE', eu: '03. ZINTZOTASUNA', oc: '03. HONESTETÒAT' },
        'prop.p3.text':        { es: 'Reconocer estas asimetrías no resta importancia a otros problemas sociales. La justicia es una suma, no una resta.', ca: 'Reconèixer aquestes asimetries no resta importància a altres problemes socials. La justícia és una suma, no una resta.', gl: 'Recoñecer estas asimetrías non resta importancia a outros problemas sociais. A xustiza é unha suma, non unha resta.', eu: 'Asimetria hauek aitortzeak ez die beste gizarte-arazoei garrantzia kentzen. Justizia batuketa bat da, ez kenketa bat.', oc: 'Reconéisher aqueras asimetries non resta importància a auts problèmes sociaus. La justícia ei ua sòma, non ua rèsta.' },

        'prop.busca.title':    { es: '¿Qué buscamos?', ca: 'Què busquem?', gl: 'Que buscamos?', eu: 'Zer bilatzen dugu?', oc: 'Qué cercam?' },
        'prop.g1':             { es: 'Que el suicidio masculino se trate como la emergencia de salud pública que es.', ca: 'Que el suïcidi masculí es tracti com l\'emergència de salut pública que és.', gl: 'Que o suicidio masculino se trate como a emerxencia de saúde pública que é.', eu: 'Gizonezkoen suizidioa den osasun publikoko larrialdi gisa tratatua izatea.', oc: 'Que lo suïcidi masculin se tracti coma l\'emergéncia de salut publica qu\'ei.' },
        'prop.g2':             { es: 'Que la siniestralidad laboral masculina reciba recursos y protocolos proporcionales a su mortalidad.', ca: 'Que la sinistralitat laboral masculina rebi recursos i protocols proporcionals a la seva mortalitat.', gl: 'Que a sinistralidade laboral masculina reciba recursos e protocolos proporcionais á súa mortalidade.', eu: 'Gizonezkoen lan-istripuek haien heriotza-tasarekin proportzionalak diren baliabideak eta protokoloak jasotzea.', oc: 'Que la sinistralitat laborala masculina rebebi recòrses e protocòls proporcionals a sa mortalitat.' },
        'prop.g3':             { es: 'Que las leyes garanticen la igualdad real de trato, sin excepciones por razón de sexo.', ca: 'Que les lleis garanteixin la igualtat real de tracte, sense excepcions per raó de sexe.', gl: 'Que as leis garantan a igualdade real de trato, sen excepcións por razón de sexo.', eu: 'Legeek benetako tratu-berdintasuna bermatzea, sexu-arrazoiengatiko salbuespenik gabe.', oc: 'Que las leis garantisquen l\'egalitat reala de tractament, sense excepcions per rason de sèxe.' },
        'prop.g4':             { es: 'Que cuando se hable de vulnerabilidad, todos esos hombres también sean contados.', ca: 'Que quan es parli de vulnerabilitat, tots aquells homes també siguin comptats.', gl: 'Que cando se fale de vulnerabilidade, todos eses homes tamén sexan contados.', eu: 'Zaurgarritasunaz hitz egiten denean, gizon horiek guztiak ere kontuan hartzea.', oc: 'Que quan se parli de vulnerabilitat, tots aqueths òmes tanben siguen comptats.' },

        'prop.ayuda.title':    { es: 'SI NECESITAS AYUDA', ca: 'SI NECESSITES AJUDA', gl: 'SE NECESITAS AXUDA', eu: 'LAGUNTZA BEHAR BADUZU', oc: 'SI BESONHES AJUDA' },
        'prop.ayuda.p1':       { es: 'Si eres un hombre que está sufriendo en silencio o te sientes superado, no estás solo. Tu vida importa.', ca: 'Si ets un home que està patint en silenci o et sents superat, no estàs sol. La teva vida importa.', gl: 'Se es un home que está a sufrir en silencio ou te sentes superado, non estás só. A túa vida importa.', eu: 'Isiltasunean sufritzen ari zaren gizona bazara edo gainezka sentitzen bazara, ez zaude bakarrik. Zure bizitza garrantzitsua da.', oc: 'Si ès un òme que soòfre en siòlenci o te sentes superòat, non estàs sol. Ta vida importa.' },
        'prop.ayuda.tel':      { es: 'TELÉFONO 024', ca: 'TELÈFON 024', gl: 'TELÉFONO 024', eu: '024 TELEFONOA', oc: 'TELEFÒN 024' },
        'prop.ayuda.desc':     { es: 'Atención a la conducta suicida. Gratuito y confidencial. 24h.', ca: 'Atenció a la conducta suïcida. Gratuït i confidencial. 24h.', gl: 'Atención á conduta suicida. Gratuíto e confidencial. 24h.', eu: 'Jokabide suizidaren arreta. Doakoa eta konfidentziala. 24h.', oc: 'Atencion ara condòcta suïcida. Gratuit e confidenciau. 24h.' },

        'prop.cta.title':      { es: 'EL CAMBIO EMPIEZA POR CONOCER LA VERDAD', ca: 'EL CANVI COMENÇA PER CONÈIXER LA VERITAT', gl: 'O CAMBIO COMEZA POR COÑECER A VERDADE', eu: 'ALDAKETA EGIA EZAGUTZETIK HASTEN DA', oc: 'LO CAMBI COMENCE PER CONÉISHER LA VERITAT' },

        // =====================================================================
        // BLOG INDEX PAGE
        // =====================================================================
        'blog.title':          { es: 'BLOG', ca: 'BLOG', gl: 'BLOG', eu: 'BLOGA', oc: 'BLOG' },
        'blog.subtitle':       { es: 'Análisis, datos y reflexiones sobre las realidades que no aparecen en los titulares. Documentado con fuentes oficiales.', ca: 'Anàlisis, dades i reflexions sobre les realitats que no apareixen als titulars. Documentat amb fonts oficials.', gl: 'Análises, datos e reflexións sobre as realidades que non aparecen nos titulares. Documentado con fontes oficiais.', eu: 'Titularretan agertzen ez diren errealitatei buruzko analisiak, datuak eta hausnarketan. Iturri ofizialekin dokumentatua.', oc: 'Analisis, donades e reflexions sus las realitats que non apareishen ens titulars. Documentat damb fonts oficiau.' },
        'blog.section.recent': { es: 'Artículos recientes', ca: 'Articles recents', gl: 'Artigos recentes', eu: 'Azken artikuluak', oc: 'Articles recènts' },
        'blog.loading':        { es: 'Cargando artículos...', ca: 'Carregant articles...', gl: 'Cargando artigos...', eu: 'Artikuluak kargatzen...', oc: 'Cargant articles...' },
        'blog.error':          { es: 'Error cargando artículos', ca: 'Error carregant articles', gl: 'Erro cargando artigos', eu: 'Errorea artikuluak kargatzean', oc: 'Error cargant articles' },
        'blog.readmore':       { es: 'Leer artículo completo →', ca: 'Llegir article complet →', gl: 'Ler artigo completo →', eu: 'Artikulu osoa irakurri →', oc: 'Légir article complèt →' },

        // =====================================================================
        // BLOG ARTICLES — COMMON
        // =====================================================================
        'blog.back':           { es: '← VOLVER AL BLOG', ca: '← TORNAR AL BLOG', gl: '← VOLVER AO BLOG', eu: '← BLOGERA ITZULI', oc: '← TORNAR AR BLOG' },
        'blog.fuentes':        { es: '🔎 Fuentes', ca: '🔎 Fonts', gl: '🔎 Fontes', eu: '🔎 Iturriak', oc: '🔎 Fonts' },

        'blog.footer.precio':  { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: INE, SEPE, MINISTERIO DE TRABAJO', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: INE, SEPE, MINISTERI DE TREBALL', gl: 'TODOS ESES HOMES © 2026 — FONTES: INE, SEPE, MINISTERIO DE TRABALLO', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: INE, SEPE, LAN MINISTERIOA', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: INE, SEPE, MINISTÈRI DE TRABALH' },
        'blog.footer.presun':  { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: BOE, CGPJ, TRIBUNAL SUPREMO', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: BOE, CGPJ, TRIBUNAL SUPREM', gl: 'TODOS ESES HOMES © 2026 — FONTES: BOE, CGPJ, TRIBUNAL SUPREMO', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: BOE, CGPJ, AUZITEGI GORENA', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: BOE, CGPJ, TRIBUNAU SUÒPÒREM' },
        'blog.footer.techo':   { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: SEPE, INSST, MINISTERIO DE TRABAJO, INE', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: SEPE, INSST, MINISTERI DE TREBALL, INE', gl: 'TODOS ESES HOMES © 2026 — FONTES: SEPE, INSST, MINISTERIO DE TRABALLO, INE', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: SEPE, INSST, LAN MINISTERIOA, INE', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: SEPE, INSST, MINISTÈRI DE TRABALH, INE' },
        'blog.footer.invis':   { es: 'TODOS ESOS HOMBRES © 2026 — FUENTES: INE, HOGAR SÍ, ACCEM, ARRELS FUNDACIÓ', ca: 'TOTS AQUELLS HOMES © 2026 — FONTS: INE, HOGAR SÍ, ACCEM, ARRELS FUNDACIÓ', gl: 'TODOS ESES HOMES © 2026 — FONTES: INE, HOGAR SÍ, ACCEM, ARRELS FUNDACIÓ', eu: 'GIZON HORIEK GUZTIAK © 2026 — ITURRIAK: INE, HOGAR SÍ, ACCEM, ARRELS FUNDACIÓ', oc: 'TOTS AQUETHS ÒMES © 2026 — FONTS: INE, HOGAR SÍ, ACCEM, ARRELS FUNDACIÓ' },

    };

    // =========================================================================
    // ENGINE
    // =========================================================================

    let currentLang = localStorage.getItem('teh_lang') || 'es';

    function t(key) {
        const entry = T[key];
        if (!entry) return null;
        return entry[currentLang] || entry['es'] || key;
    }

    function applyTranslations() {
        // Elements with data-i18n attribute → set innerHTML
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val !== null) el.innerHTML = val;
        });

        // Elements with data-i18n-placeholder → set placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (val !== null) el.placeholder = val;
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang;

        // Update active state in selector
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === currentLang);
        });

        // Update selector button text
        const btn = document.querySelector('.lang-selector-btn');
        if (btn) {
            btn.textContent = LANG_NAMES[currentLang];
        }
    }

    function setLang(lang) {
        if (!LANGS.includes(lang)) return;
        currentLang = lang;
        localStorage.setItem('teh_lang', lang);
        applyTranslations();

        // Dispatch event for pages with dynamic content (asimetrias, blog)
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
    }

    function injectSelector() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        // Create language selector
        const selectorWrap = document.createElement('div');
        selectorWrap.className = 'lang-selector';
        selectorWrap.innerHTML = `
            <button class="lang-selector-btn" aria-label="Seleccionar idioma" aria-expanded="false">
                ${LANG_NAMES[currentLang]}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style="margin-left:6px;vertical-align:middle;">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <div class="lang-dropdown">
                ${LANGS.map(l => `
                    <button class="lang-option ${l === currentLang ? 'active' : ''}" data-lang="${l}">
                        <span class="lang-code">${l.toUpperCase()}</span>
                        <span class="lang-name">${LANG_NAMES[l]}</span>
                    </button>
                `).join('')}
            </div>
        `;

        // Insert after the ul nav links
        const ul = nav.querySelector('ul');
        if (ul) {
            ul.parentNode.insertBefore(selectorWrap, ul.nextSibling);
        } else {
            nav.appendChild(selectorWrap);
        }

        // Toggle dropdown
        const btn = selectorWrap.querySelector('.lang-selector-btn');
        const dropdown = selectorWrap.querySelector('.lang-dropdown');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen);
        });

        // Language selection
        selectorWrap.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                setLang(opt.dataset.lang);
                dropdown.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    }

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lang-selector {
                position: relative;
                z-index: 1001;
            }

            .lang-selector-btn {
                background: none;
                border: 2px solid #000;
                padding: 0.45rem 0.9rem;
                font-family: 'Space Mono', monospace;
                font-size: 0.75rem;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                transition: all 0.2s;
                white-space: nowrap;
                color: #000;
                background: #fff;
            }

            .lang-selector-btn:hover {
                background: #000;
                color: #fff;
            }

            .lang-selector-btn:hover svg path {
                stroke: #fff;
            }

            .lang-dropdown {
                position: absolute;
                top: calc(100% + 6px);
                right: 0;
                background: #fff;
                border: 2px solid #000;
                min-width: 180px;
                display: none;
                flex-direction: column;
                box-shadow: 4px 4px 0 #000;
            }

            .lang-dropdown.open {
                display: flex;
            }

            .lang-option {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                padding: 0.7rem 1rem;
                border: none;
                background: none;
                cursor: pointer;
                font-family: 'Space Mono', monospace;
                font-size: 0.8rem;
                text-align: left;
                transition: background 0.15s;
                border-bottom: 1px solid #eee;
                color: #000;
            }

            .lang-option:last-child {
                border-bottom: none;
            }

            .lang-option:hover {
                background: #f0f0f0;
            }

            .lang-option.active {
                background: #000;
                color: #fff;
                font-weight: 700;
            }

            .lang-code {
                font-weight: 700;
                min-width: 28px;
                text-transform: uppercase;
            }

            .lang-name {
                flex: 1;
            }

            @media (max-width: 968px) {
                .lang-selector {
                    order: -1;
                    align-self: flex-end;
                    margin-bottom: -0.25rem;
                }

                .lang-selector-btn {
                    font-size: 0.7rem;
                    padding: 0.35rem 0.7rem;
                }

                .lang-dropdown {
                    right: 0;
                    min-width: 160px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // =========================================================================
    // INIT
    // =========================================================================
    function init() {
        injectStyles();
        injectSelector();
        applyTranslations();
    }

    // Expose for dynamic content
    window.TEH_i18n = { t, setLang, currentLang: () => currentLang, T };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
