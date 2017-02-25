jQuery.extend(true,langJSON, {
  "de" : {
    "HelpTitle" : "Hilfe",
    "BURST_RX" : "BURST_RX<br/><br/>Hilfetext",
    "BUTTON_LOCK" : "Die Bedienung am Ger&auml;t kann gesperrt werden, um das ungewollte Ver&auml;ndern von Einstellungen, z.B. durch versehentliches Ber&uuml;hren, zu verhindern. Die lokale Bediensperre sperrt die Bedienung am Ger&auml;t.<br/><br/>Die Bediensperre kann am Ger&auml;t wieder aufgehoben werden.",
    "GLOBAL_BUTTON_LOCK" : "Die Bedienung am Ger&auml;t kann gesperrt werden, um das ungewollte Ver&auml;ndern von Einstellungen, z.B. durch versehentliches Ber&uuml;hren, zu verhindern.<br/><br/>Die globale Bediensperre sperrt die Bedienung am Ger&auml;t und kann nur &uuml;ber die WebUI (nicht am Ger&auml;t) deaktiviert werden.",
    "MODUS_BUTTON_LOCK" : "Bei aktivierter Modus-Bediensperre kann das Ger&auml;t nur im aktuell eingestellten Modus bedient werden. Ein Wechsel zwischen den Betriebsmodi (Auto, Manu, Urlaub oder Boost) ist nicht m&ouml;glich.<br/><br/>Die Modus Bediensperre kann nur &uuml;ber die WebUI (nicht am Ger&auml;t) deaktiviert werden.",

    //TODO activate with homematic version 2.8 (party)
    //"TEMPERATUREFALL_MODUS" : "Hier k&ouml;nnen Sie Modus-Einstellungen f&uuml;r die Temperatursturz-<br/>erkennung vornehmen:<br/><br/><ul><li>Inaktiv: Temperatursturzerkennung inaktiv</li><li>Auto-Modus: Temperatursturzerkennung nur im Automodus aktiv</li><li>Auto + Manu-Modus: Temperatursturzerkennung nur im Auto- und Manu-Modus aktiv</li><li>Auto + Party-Modus: Temperatursturzerkennung nur im Auto- und Party-Modus aktiv</li><li>Aktiv: Temperatursturzerkennung f&uuml;r alle Modi aktiv (Standard)</li></ul>",
    "TEMPERATUREFALL_MODUS" : "Hier k&ouml;nnen Sie Modus-Einstellungen f&uuml;r die Temperatursturz-<br/>erkennung vornehmen:<br/><br/><ul><li>Inaktiv: Temperatursturzerkennung inaktiv</li><li>Auto-Modus: Temperatursturzerkennung nur im Automodus aktiv</li><li>Auto + Manu-Modus: Temperatursturzerkennung nur im Auto- und Manu-Modus aktiv</li><li>Aktiv: Temperatursturzerkennung f&uuml;r alle Modi aktiv (Standard)</li></ul>",
    "TEMPERATUREFALL_WINDOW_OPEN_TIME_PERIOD" : "Hier k&ouml;nnen Sie die Zeitdauer der Temperatursturzerkennung einstellen.<br/><br/>Diese Funktion ist nicht in Verbindung mit einem HomeMatic Fensterkontakt m&ouml;glich.",
    "DECALCIFICATION_TIME" : "Zum Schutz vor Ventilverkalkung wird einmal w&ouml;chentlich eine Entkalkungsfahrt des Heizk&ouml;rperthermostat durchgef&uuml;hrt. Dabei wird das Ventil einmal komplett ge&ouml;ffnet und anschlie&szlig;end wieder geschlossen. Dadurch wird verhindert, dass sich der Ventilstift durch Kalkablagerungen festsetzt. W&auml;hrend dieses kurzen Zeitraums ist keine Bedienung m&ouml;glich.<br/><br>Werkseitig ist f&uuml;r die w&ouml;chentliche Entkalkungsfahrt Samstag, 11:00 Uhr festgelegt. Sie k&ouml;nnen den  Zeitpunkt f&uuml;r die Entkalkungsfahrt hier individuell anpassen.",
    "TEMPERATURE_OFFSET" : "Da die Temperatur am Heizk&ouml;rper gemessen wird, kann es an einer anderen Stelle im Raum k&auml;lter oder w&auml;rmer sein. Um dies anzugleichen, kann ein Temperatur-Offset von &plusmn;3.5&#176;C eingestellt werden.<br/><br/>Werden z.B. 18&#176;C anstatt eingestellter 20&#176;C gemessen, ist ein Offset von -2.0&#176;C einzustellen. Werksseitig ist eine Offset-Temperatur von 0.0&#176;C eingestellt.<br/><br/>Sie k&ouml;nnen die Offset-Temperatur hier individuell anpassen.",
    "BOOST_TIME_PERIOD" : "Mit der Boost-Funktion k&ouml;nnen k&uuml;hle R&auml;ume per Knopfdruck und innerhalb k&uuml;rzester Zeit aufgeheizt werden. Beim Ausl&ouml;sen der Boost-Funktion wird das Heizungsventil sofort f&uuml;r 5 Minuten auf 80% ge&ouml;ffnet (Werkseinstellung).<br/><br/>Sie k&ouml;nnen die Boost-Dauer hier individuell anpassen.",
    "BOOST_POSITION" : "Mit der Boost-Funktion k&ouml;nnen k&uuml;hle R&auml;ume per Knopfdruck und innerhalb k&uuml;rzester Zeit aufgeheizt werden. Beim Ausl&ouml;sen der Boost-Funktion wird das Heizungsventil sofort f&uuml;r 5 Minuten auf 80% ge&ouml;ffnet (Werkseinstellung).<br/><br/>Sie k&ouml;nnen den Ventil&ouml;ffnungsgrad w&auml;hrend der Boost-Dauer hier individuell anpassen.",
    "BOOST_AFTER_WINDOW_OPEN" : "Sie k&ouml;nnen diese Funktion aktivieren, wenn die Boostfunktion automatisch ausgel&ouml;st werden soll, nachdem ein offenes Fenster erkannt und das Fenster wieder geschlossen wurde.",
    "VALVE_OFFSET" : "Werden in einem Raum mehrere Heizk&ouml;rper mit einem HomeMatic Heizk&ouml;rperthermostat betrieben, kann es dazu kommen, dass einige Heizk&ouml;rper mehr heizen als andere oder im Extremfall ein Heizk&ouml;rper hei&szlig; ist und andere kalt.<br/><br/>Um dies zu kompensieren, kann ein Ventil-Offset bei dem Heizk&ouml;rperthermostaten eingestellt werden, bei dem der Heizk&ouml;rper kalt bleibt. Werksseitig ist ein Ventil-Offset von 0% eingestellt.<br/><br/>Der Wert kann hier individuell angepasst werden (0 bis 100 %). Unabh&auml;ngig vom eingestellten Offset ist das Ventil bei 0 % aber weiterhin geschlossen. ",
    "VALVE_ERROR_RUN_POSITION" : "Sollte eine leere Batterie nicht bemerkt werden, f&auml;hrt der Heizk&ouml;rperthermostat in eine \"Ventilst&ouml;rungsposition\" um zu verhindern, dass der Raum komplett ausk&uuml;hlt. Werksseitig ist eine Ventilst&ouml;rungsposition von 15 % eingestellt.<br/><br/>Der Wert kann hier individuell angepasst werden (0 bis 100 %).",
    "VALVE_MAXIMUM_POSITION" : "Werksseitig ist eine maximale Ventil&ouml;ffnung von 100 % eingestellt.<br/><br/>Zur Begrenzung der Ventil&ouml;ffnungsposition kann hier eine maximale Position individuell angepasst werden (0-100 %).",
    "MANU_MODE_PRIORITIZATION" : "Hier k&ouml;nnen Sie die Priorisierung f&uuml;r die Funktionalit&auml;t im Manu-Modus festlegen:<br/><br/><ul><li><b>Solltemp.-&Auml;nderungen durch HZ, WT, FK</b>:<ul><li>Solltemp.-&Auml;nderungen k&ouml;nnen nur durch Heizk&ouml;rperthermostat, Wandthermostat, Fensterkontakt sowie direkt am Ger&auml;t durchgef&uuml;hrt werden. (Standard)</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch alle VP</b>:<ul><li>Jeder bekannte Verkn&uuml;pfungspartner kann die Solltemperatur &uuml;berschreiben. Dabei hat die jeweils letzte Solltemperatur&auml;nderung Priorit&auml;t. Eine direkte Bedienung am Ger&auml;t ist weiterhin m&ouml;glich.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch Ger&auml;t</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur direkt am Ger&auml;t durchgef&uuml;hrt werden.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch CCU</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur durch die CCU durchgef&uuml;hrt werden.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch HZ, WT, CCU</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur durch die Verkn&uuml;pfungspartner Heizk&ouml;rperthermostat, Wandthermostat und CCU sowie direkt am  Ger&auml;t durchgef&uuml;hrt werden.</li></ul></li></ul>",
    "PARTY_MODE_PRIORITIZATION" : "Hier k&ouml;nnen Sie die Priorisierung f&uuml;r die Funktionalit&auml;t im Party-Modus festlegen:<br/><ul><li><b>Solltemp.-&Auml;nderungen durch HZ, WT, FK</b>:<ul><li>Solltemp.-&Auml;nderungen k&ouml;nnen nur durch Heizk&ouml;rperthermostat, Wandthermostat, Fensterkontakt sowie direkt am Ger&auml;t durchgef&uuml;hrt werden. (Standard)</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch alle VP</b>:<ul><li>Jeder bekannte Verkn&uuml;pfungspartner kann die Solltemperatur &uuml;berschreiben. Dabei hat die jeweils letzte Solltemperatur&auml;nderung Priorit&auml;t. Eine direkte Bedienung am Ger&auml;t ist weiterhin m&ouml;glich.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch Ger&auml;t</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur direkt am Ger&auml;t durchgef&uuml;hrt werden.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch CCU</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur durch die CCU durchgef&uuml;hrt werden.</li></ul></li><li><b>Solltemp.-&Auml;nderungen durch HZ, WT, CCU</b>:<ul><li>Solltemperatur&auml;nderungen k&ouml;nnen nur durch die Verkn&uuml;pfungspartner Heizk&ouml;rperthermostat, Wandthermostat und CCU sowie direkt am  Ger&auml;t durchgef&uuml;hrt werden.</li></ul></li></ul>",

    "WEEK_PROGRAM_POINTER" : "Hier k&ouml;nnen Sie das zu editierende Wochenprogramm w&auml;hlen.",
    "TWO_POINT_HYSTERESIS" : "Der Wandthermostat kann in Verbindung mit einem Schaltaktor als Zweipunktregler genutzt werden.<br/><br/>Die Regelung erfolgt in Abh&auml;ngigkeit der Soll- und Ist-Temperatur sowie der hier festgelegten Hysterese.",
    "HEATING_COOLING" : "Wenn der Wandthermostat als Zweipunktregler genutzt wird, ist hier festgelegt, ob die Regelung 'Heizen' oder 'K&uuml;hlen' soll.<br/><br/>Im Heiz-Betrieb wird der Schaltaktor bei Unterschreiten der Soll-Temperatur eingeschaltet, im K&uuml;hl-Betrieb wird er bei &Uuml;berschreiten eingeschaltet.",

    "HUMIDITY_LIMIT_DISABLE" : "Mit diesem Parameter kann gew&auml;hlt werden, ob die K&uuml;hlung w&auml;hrend des K&uuml;hlbetriebes bei &Uuml;berschreitung der Luftfeuchtigkeitsschwelle unterbrochen wird. Dadurch kann verhindert werden, dass die Luftfeuchtigkeit weiter ansteigt.",

    "DURATION_5MIN" : "Befindet sich der Thermostat im Auto-Modus, so wird die Temperatur mit jedem Schaltzeitpunkt auf den programmierten Wert ge&auml;ndert. Dieser Parameter dient dazu, diesen Automatismus f&uuml;r eine gewisse Zeit ausser Kraft zu setzen. Nach Ablauf der Zeit, geht der Thermostat wieder in den Auto-Modus &uuml;ber.<br><br/>" +
      "Die Zeit wird in Minuten eingegeben. Der h&ouml;chst zul&auml;ssige Wert betr&auml;gt 720 Minuten, was 12 Stunden entspricht."
  },

  "en" : {
    "HelpTitle" : "Help",
    "BURST_RX" : "BURST_RX<br/><br/>Help text",
    "BUTTON_LOCK" : "Operation of the device can be locked to avoid unintended changes, e.g. through involuntary touch. The local operating lock will lock the operation on the device.<br/><br/>It can be deactivated via the device itself.",
    "GLOBAL_BUTTON_LOCK" : "Operation of the device can be locked to avoid unintended changes, e.g. through involuntary touch.<br/><br/>The global operating lock will lock the operation on the device and can only be deactivated via the WebUI (not via the device itself).",
    "MODUS_BUTTON_LOCK" : "If the mode operating lock is activated the device can be operated only in the mode that is currently set. The operating mode (auto, manu, holiday or boost) can not be changed and can only be deactivated via the WebUI (not via the device itself).",
    //TODO activate with homematic version 2.8 (party)
    //"TEMPERATUREFALL_MODUS" : "You can individually adjust the mode settings of the temperature<br/>fall detection here.<br/><br/><ul><li>Inactive: Temperature fall detection inactive</li><li>Auto mode: Temperature fall detection only active in auto mode</li><li>Auto + manu mode: Temperature fall detection only active in auto and manu mode</li><li>Auto + party mode: Temperature fall detection only active in auto and party mode</li><li>Active: Temperature fall detection active in all modes (default)</li></ul>",
    "TEMPERATUREFALL_MODUS" : "You can individually adjust the mode settings of the temperature<br/>fall detection here.<br/><br/><ul><li>Inactive: Temperature fall detection inactive</li><li>Auto mode: Temperature fall detection only active in auto mode</li><li>Auto + manu mode: Temperature fall detection only active in auto and manu mode</li><li>Active: Temperature fall detection active in all modes (default)</li></ul>",
    "TEMPERATUREFALL_WINDOW_OPEN_TIME_PERIOD" : "You can adjust the duration of the temperature fall detection here.<br/><br/>This function is not possible in connection with a HomeMatic Window Contact.",
    "DECALCIFICATION_TIME" : "The radiator thermostat can be protected against valve calcification automatically. Therefore, an automatic routine descaling is performed once a week. The valve completely opens and closes once. This avoids that the valve pin gets stuck due to calcification. During this period, operation is not possible.<br/><br>Routine descaling is factory-set to run once a week on Saturdays at 11:00 h. You can individually adjust the time and date for the routine descaling here.",
    "TEMPERATURE_OFFSET" : "As the temperature is measured on the radiator, the temperature distribution can vary throughout a room. To adjust this, a temperature offset of &plusmn;3.5&#176;C can be set.<br/><br/>If a temperature of e.g.18&#176;C is measured instead of the set 20&#176;C, an offset temperature of -2.0&#176;C can be set. An offset temperature of 0.0&#176;C is set in the factory settings.<br/><br/>You can individually adjust the offset temperature here.",
    "BOOST_TIME_PERIOD" : "With the boost function, cool rooms can be heated within short at the touch of a button. When the function is activated, the heating valve opens immediately for 5 minutes at 80% (factory setting).<br/><br/>You can individually adjust the duration of the boost function here.",
    "BOOST_POSITION" : "With the boost function, cool rooms can be heated within short at the touch of a button. When the function is activated, the heating valve opens immediatelyfor 5 minutes at 80% (factory setting).<br/><br/>You can individually adjust the valve opening during the boost function here.",
    "BOOST_AFTER_WINDOW_OPEN" : "Here, you can activate automatic triggering of the boost function after open windows have been detected and closed again.",
    "VALVE_OFFSET" : "If several radiators in one room are operated with a HomeMatic Radiator Thermostat some radiators may heat more than others. In certain cases, some radiators might be hot while others are still cold.<br/><br/>To compensate this, a valve offset can be set for the radiator thermostat that is mounted on the cold radiator.  A valve offset of 0% is set in the factory settings.<br/><br/>You can individually adjust the value here (0 to 100 %).",
    "VALVE_ERROR_RUN_POSITION" : "If an empty battery has not been recognized, the radiator thermostat moves back into a \"valve error position\". This avoids, that the room temperature will cool down completely. A valve error position of 15 % is set in the factory settings.<br/><br/>You can individually adjust the value here (0 to 100 %).",
    "VALVE_MAXIMUM_POSITION" : "A maximum valve opening of 100% is set in the factory settings.<br/><br/>You can individually adjust the maximum valve opening position<br/>(0-100 %) here.",
    "MANU_MODE_PRIORITIZATION" : "You can adjust the prioritization of the functions in manu mode here:<br/><br/><ul><li><b>Setpoint temp. changes via RT, WT, WC</b>:<ul><li>Setpoint temp. changes can only be performed via the radiator thermostat, wall thermostat, window contact or the device itself (default). </li></ul></li><li><b>Setpoint temp. changes via CP</b>:<ul><li>Setpoint temp. changes can be performed via every known connection partner. However, the last change of the setpoint temperature will have priority. Direct operation on the device itself will remain possible.</li></ul></li><li><b>Setpoint temperature via device</b>:<ul><li>Setpoint temperature changes can only be performed via the device itself.</li></ul></li><li><b>Setpoint temperature changes via CCU</b>:<ul><li>Setpoint temperature changes can only be performed via CCU.</li></ul></li><li><b>Setpoint temperature changes via RT, WT, CCU</b>:<ul><li>Setpoint temperature changes can only be performed via a radiator thermostat, wall thermostat and CCU or via the device itself.</li></ul></li></ul>",
    "PARTY_MODE_PRIORITIZATION" : "You can adjust the prioritization of the functions in party mode here:<br/><br/><ul><li><b>Setpoint temp. changes via RT, WT, WC</b>:<ul><li>Setpoint temp. changes can only be performed via the radiator thermostat, wall thermostat, window contact or the device itself (default). </li></ul></li><li><b>Setpoint temp. changes via CP</b>:<ul><li>Setpoint temp. changes can be performed via every known connection partner. However, the last change of the setpoint temperature will have priority. Direct operation on the device itself will remain possible.</li></ul></li><li><b>Setpoint temperature via device</b>:<ul><li>Setpoint temperature changes can only be performed via the device itself.</li></ul></li><li><b>Setpoint temperature changes via CCU</b>:<ul><li>Setpoint temperature changes can only be performed via CCU.</li></ul></li><li><b>Setpoint temperature changes via RT, WT, CCU</b>:<ul><li>Setpoint temperature changes can only be performed via a radiator thermostat, wall thermostat and CCU or via the device itself.</li></ul></li></ul>",

    "WEEK_PROGRAM_POINTER" : "Please select the weekly program you want to edit here.",
    "TWO_POINT_HYSTERESIS" : "In connection with a switch actuator, the room thermostat can be used as on-off control.<br/><br/>The on-off control depends on the setpoint and actual temperature as well as the defined hysteresis.",
    "HEATING_COOLING" : "If the room thermostat is used as on-off control, you can define here whether you want to set the 'heating' or 'cooling' mode.<br/><br/>In heating mode, the switch actuator will be switched on if the setpoint temperature falls below threshold, in cooling mode the actuator will be switched on if the threshold is exceeded.",

    "HUMIDITY_LIMIT_DISABLE" : "With this parameter you can define, if the cooling should be interrupted during cooling mode, as soon as the humidity threshold is exceeded. This stops the humidity value from increasing further.",

    "DURATION_5MIN" : "If the thermostat is in auto mode, temperature will be changed with every switching time to the value defined. This parameter helps you to discontinue the automatism for a certain period of time. After the time has expired, the thermostat returns back to auto mode.<br><br/>" +
      "Time will be displayed in minutes. The highest value permitted is 720 minutes (12 hours)."

  },

  "tr" : {
    "HelpTitle" : "Yardim",
    "BURST_RX" : "BURST_RX<br/><br/>Yardim metni",
    "BUTTON_LOCK" : "&Ouml;rnegin yanlislikla temas sonucu ayarlarin istenmeden degistirilmesini &ouml;nlemek icin cihazin kumandasi kilitlenebilir. Yerel kumanda kilidi cihazin kumandasini kilitler.<br/><br/>Kumanda kilidi cihazdan tekrar kaldirilabilir.",
    "GLOBAL_BUTTON_LOCK" : "&Ouml;rnegin yanlislikla temas sonucu ayarlarin istenmeden degistirilmesini &ouml;nlemek icin cihazin kumandasi kilitlenebilir.<br/><br/>Global kumanda kilidi kumandayi kilitler ve sadece WebUI &uuml;zerinden (cihazdan degil) devre disi birakilabilir.",
    "MODUS_BUTTON_LOCK" : "Kumanda kilidi modu etkinken cihaz sadece g&uuml;ncel ayarli modda calistirilabilir. Isletme modlarini (otomatik, man&uuml;el, tatil veya Boost) degistirmek m&uuml;mk&uuml;n degil.<br/><br/>Kumanda kilidi modu sadece WebUI &uuml;zerinden (cihazdan degil) devre disi birakilabilir.",
    //TODO activate with homematic version 2.8 (party)
    //"TEMPERATUREFALL_MODUS" : "Buradan sicaklik d&uuml;s&uuml;s<br/>algisi icin mod ayarlarini yapabilirsiniz:<br/><br/><ul><li>etkin degil: Sicaklik d&uuml;s&uuml;s algisi etkin degil</li><li>otomatik mod: Sicaklik d&uuml;s&uuml;s algisi sadece otomatik modda etkin</li><li>otomatik + man&uuml;el mod: Sicaklik d&uuml;s&uuml;s algisi sadece otomatik ve man&uuml;el modda etkin</li><li>otomatik + parti modu: Sicaklik d&uuml;s&uuml;s algisi sadece otomatik ve parti modunda etkin</li><li>etkin: Sicaklik d&uuml;s&uuml;s algisi t&uuml;m modlar icin etkin (standart)</li></ul>",
    "TEMPERATUREFALL_MODUS" : "Buradan sicaklik d&uuml;s&uuml;s<br/>algisi icin mod ayarlarini yapabilirsiniz:<br/><br/><ul><li>etkin degil: Sicaklik d&uuml;s&uuml;s algisi etkin degil</li><li>otomatik mod: Sicaklik d&uuml;s&uuml;s algisi sadece otomatik modda etkin</li><li>otomatik + man&uuml;el mod: Sicaklik d&uuml;s&uuml;s algisi sadece otomatik ve man&uuml;el modda etkin</li><li>etkin: Sicaklik d&uuml;s&uuml;s algisi t&uuml;m modlar icin etkin (standart)</li></ul>",
    "TEMPERATUREFALL_WINDOW_OPEN_TIME_PERIOD" : "Buradan sicaklik d&uuml;s&uuml;s algisinin s&uuml;resini ayarlayabilirsiniz.<br/><br/>Bu fonksiyon bir HomeMatic pencere kontagi ile baglanti kurulmadiginda kullanilabilir.",
    "DECALCIFICATION_TIME" : "Valfleri kireclenmeye karsi korumak icin, radyat&ouml;r termostatinda haftada bir kere kirecten arindirma islemi yapilir. Bu esnada valf bir kere tamamen acilir ve daha sonra da tekrar kapatilir. Bu sayede valf piminin kirec kalintilarindan dolayi sikismasi &ouml;nlenir. Bu kisa s&uuml;re icerisinde cihazi kumanda etmek m&uuml;mk&uuml;n degildir.<br/><br>Fabrikada haftalik kirecten arindirma islemi Cumartesi g&uuml;nleri saat 11:00'da yapilmaktadir. Kirecten arindirma isleminin yapilacak zamani kendiniz belirleyebilirsiniz.",
    "TEMPERATURE_OFFSET" : "Sicaklik radyat&ouml;rden &ouml;lc&uuml;ld&uuml;g&uuml;nden, odanin baska bir yeri daha sicak veya daha soguk olabilir. Bunu dengelemek icin &plusmn;3.5&#176;C'lik bir sicaklik ofseti ayarlanabilir.<br/><br/>Eger ayarli olan 20&#176;C yerine &ouml;rn. 18&#176;C &ouml;lc&uuml;l&uuml;rse ofset degeri olarak -2.0&#176;C ayarlanmalidir. Fabrikada 0.0&#176;C'lik bir ofset sicakligi ayarlanmistir.<br/><br/>Ofset sicakligini duruma g&ouml;re degistirebilirsiniz.",
    "BOOST_TIME_PERIOD" : "Boost fonksiyonu yardimiyla serin odalar tek bir d&uuml;gme ile kisa bir s&uuml;rede isitilabilmektedir. Boost fonksiyonunu devreye sokarken isitici valfi hemen 5 dakika boyunca %80 acilir (fabrika ayari).<br/><br/>Bu Boost s&uuml;resini duruma g&ouml;re degistirebilirsiniz.",
    "BOOST_POSITION" : "Boost fonksiyonu yardimiyla serin odalar tek bir d&uuml;gme ile kisa bir s&uuml;rede isitilabilmektedir. Boost fonksiyonunu devreye sokarken isitici valfi hemen 5 dakika boyunca %80 acilir (fabrika ayari).<br/><br/>Valfin acilma derecesini bu Boost s&uuml;resini boyunca duruma g&ouml;re degistirebilirsiniz.",
    "BOOST_AFTER_WINDOW_OPEN" : "Acik bir pencere algilandiginda ve bu pencere kapatildiginda Boost fonksiyonunun otomatik olarak devreye girmesini istiyorsaniz bu fonksiyonu etkinlestirebilirsiniz.",
    "VALVE_OFFSET" : "Eger bir oda icerisinde HomeMatic radyat&ouml;r termostatina sahip birkac radyat&ouml;r kullaniliyorsa, bazi radyat&ouml;rler digerlerinden daha fazla isinabilir ya da asiri durumlarda bir radyat&ouml;r sicakken digerleri soguk olabilir.<br/><br/>Bu durumu dengelemek icin radyat&ouml;r termostatinda bir valf ofseti ayarlanabilir ve bu sekilde radyat&ouml;r&uuml;n soguk kalmasi saglanabilir. Fabrikada %0'lik bir valf ofseti ayarlanmistir.<br/><br/>Bu degeri duruma g&ouml;re degistirebilirsiniz (0 ila %100 arasinda).",
    "VALVE_ERROR_RUN_POSITION" : "Eger bir bataryanin bos oldugu fark edilmezse, odanin tamamen sogumasini &ouml;nlemek icin radyat&ouml;r termostati \"valf ariza pozisyonuna\" gecer. Fabrikada %15'lik bir valf ariza pozisyonu ayarlanmistir.<br/><br/>Bu degeri duruma g&ouml;re degistirebilirsiniz (0 ila %100 arasinda).",
    "VALVE_MAXIMUM_POSITION" : "Fabrikada %100'l&uuml;k maksimum valf acilma derecesi ayarlanmistir.<br/><br/>Valfin bu acilma pozisyonunu sinirlamak icin buradaki maksimum pozisyonu degerini duruma g&ouml;re degistirebilirsiniz (0-%100).",
    "MANU_MODE_PRIORITIZATION" : "Burada man&uuml;el modda islevsellik icin gereken &ouml;ncelikleri belirleyebilirsiniz:<br/><br/><ul><li><b>HZ, WT, FK tarafindan nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece radyat&ouml;r termostati (HZ), duvar termostati (WT), pencere kontagi (FK) ve dogrudan cihaz ile yapilabilir. (Standart)</li></ul></li><li><b>T&uuml;m VP'ler ile nominal sicaklik degisimi</b>:<ul><li>Bilinen t&uuml;m baglanti ortagi (VP) nominal sicakligin &uuml;zerine baska bir deger yazabilir. Bu esnada girilen son nominal sicaklik degisimi &ouml;nceliklidir. Cihaz &uuml;zerinde dogrudan islem yapmak hala m&uuml;mk&uuml;n.</li></ul></li><li><b>Cihaz ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece dogrudan cihaz &uuml;zerinden yapilabilir.</li></ul></li><li><b>CCU ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece CCU ile yapilabilir.</li></ul></li><li><b>HZ, WT, CCU ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece baglanti ortaklari olan radyat&ouml;r termostati, duvar termostati, CCU ve dogrudan cihaz &uuml;zerinden degistirilebilir.</li></ul></li></ul>",
    "PARTY_MODE_PRIORITIZATION" : "Burada parti modunda islevsellik icin gereken &ouml;ncelikleri belirleyebilirsiniz:<br/><ul><li><b>HZ, WT, FK tarafindan nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece radyat&ouml;r termostati (HZ), duvar termostati (WT), pencere kontagi (FK) ve dogrudan cihaz ile yapilabilir. (Standart)</li></ul></li><li><b>T&uuml;m VP'ler ile nominal sicaklik degisimi</b>:<ul><li>Bilinen t&uuml;m baglanti ortagi (VP) nominal sicakligin &uuml;zerine baska bir deger yazabilir. Bu esnada girilen son nominal sicaklik degisimi &ouml;nceliklidir. Cihaz &uuml;zerinde dogrudan islem yapmak hala m&uuml;mk&uuml;n.</li></ul></li><li><b>Cihaz ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece dogrudan cihaz &uuml;zerinden yapilabilir.</li></ul></li><li><b>CCU ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece CCU ile yapilabilir.</li></ul></li><li><b>HZ, WT, CCU ile nominal sicaklik degisimleri</b>:<ul><li>Nominal sicaklik degisimleri sadece baglanti ortaklari olan radyat&ouml;r termostati, duvar termostati, CCU ve dogrudan cihaz &uuml;zerinden degistirilebilir.</li></ul></li></ul>",

    "WEEK_PROGRAM_POINTER" : "D&uuml;zenlenecek haftalik programi buradan secebilirsiniz.",
    "TWO_POINT_HYSTERESIS" : "Duvar termostati salter akt&uuml;at&ouml;r&uuml; yardimiyla cift noktali reg&uuml;lat&ouml;r olarak kullanilabilir.<br/><br/>Ayar islemi gercek ve nominal sicakliga ve burada tespit edilen histerezise g&ouml;re yapilir.",
    "HEATING_COOLING" : "Duvar termostati cift noktali reg&uuml;lat&ouml;r olarak kullanilacaksa burada yapilan ayarin 'isitma' ya da 'sogutma' mi olacagi burada belirlenir.<br/><br/>Salter akt&uuml;at&ouml;r&uuml; isitma modunda nominal sicakligin altinda kalirsa, sogutma modunda ise bu degeri asarsa devreye girer.",

    "HUMIDITY_LIMIT_DISABLE" : "With this parameter you can define, if the cooling should be interrupted during cooling mode, as soon as the humidity threshold is exceeded. This stops the humidity value from increasing further.",

    "DURATION_5MIN" : "If the thermostat is in auto mode, temperature will be changed with every switching time to the value defined. This parameter helps you to discontinue the automatism for a certain period of time. After the time has expired, the thermostat returns back to auto mode.<br><br/>" +
      "Time will be displayed in minutes. The highest value permitted is 720 minutes (12 hours)."
  }
});

