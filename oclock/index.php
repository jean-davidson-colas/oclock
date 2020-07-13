<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet" type="text/css">
  <!-- <link href="style.css" rel="stylesheet">-->
    <script async src="script.js"></script>
    <title>o'clock</title>
</head>
<body>
    
    <main>
<section class="montre">

    
    <div id ="clock">
    <p><u class="titre">Il est actuellement</u></p>
        <div id="clockf">
            <div id="heure"></div>
            <div>:</div>
            <div id ="minute"></div>
            <div>:</div>
            <div id ="seconde" style="color:red"></div>

        </div>

    </div>
</section>
<hr>

<section id ="reveil">

<table id="alarme">
    <tr>
        <td>Nom </td>
        <td>Heure</td>
        <td>Statut</td>
        <td>Temps restant</td>
    </tr>
</table>

<input id="tps" type="time">

<input id="event" type="text" placeholder="Entrez le nom de l'évènement">

<button id="button" onclick="rec()">valider</button>

</section>
<hr>

<section id ="oeuf">
<p><u class="titre">Minuteur</u></p>
<input type="text" id="minuteur" value=""><br>
<p id="affichage" style="color:red;"></p>

<form id="for">
<input type="button" value="Démarrez!" onClick="chrono1();">
<input type="button" value="Reset" onClick="myStopFunction1();">
<input type="button" value="Arrêter" onClick="myStopFunction()">
</form>

</section>
<hr>

<section id ="min">
<p><u class="titre">Chronomètre</u></p>
<span id="chronotime">0:00:00:00</span>
<p id="affichage1"> </p>
<form name="chronoForm" id="for">
    <input type="button" name="startstop" value="start!" onClick="chronoStart()" />
    <input type="button" name="Tour" value="Tour" onClick="chronoTour()" />
    <input type="button" name="reset" value="reset!" onClick="chronoReset()" />
</form>

</section>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>