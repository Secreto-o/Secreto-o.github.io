const button = document.getElementById('button');
const fundo = document.getElementById('fundo');
const estrela1 = document.getElementById('estrela1');
const estrela2 = document.getElementById('estrela2');
const estrela3 = document.getElementById('estrela3');
const onda1 = document.getElementById('onda1');
const onda2 = document.getElementById('onda2')
const onda3 = document.getElementById('onda3');
const onda4 = document.getElementById('onda4')
const amor = document.getElementById('amor');
const vista = document.getElementById('vista');
const acredito = document.getElementById('acredito');
const refem = document.getElementById('refem');
const inicio = document.getElementById('inicio');
const chamam = document.getElementById('chamam');
const paixao = document.getElementById('paixao');
const depois = document.getElementById('depois');
const irra = document.getElementById('irra');
const sentia = document.getElementById('sentia');
const conti = document.getElementById('conti');
const vive = document.getElementById('vive');
const parte = document.getElementById('parte');
const esquece = document.getElementById('esquece');
const ja = document.getElementById('ja');
const iludi = document.getElementById('iludi');
const opostos = document.getElementById('opostos');
const confunde = document.getElementById('confunde');
const duvida = document.getElementById('duvida');
const causou = document.getElementById('causou');
const atitude = document.getElementById('atitude');
const hoje = document.getElementById('hoje');
const algo = document.getElementById('algo');
const desistir = document.getElementById('desistir');
const prosseguir = document.getElementById('prosseguir');
const site = document.getElementById('site');
const alcance = document.getElementById('alcance');
const forma = document.getElementById('forma');
const incrivel = document.getElementById('incrivel');
const talvez = document.getElementById('talvez');
const acho = document.getElementById('acho');
const tempo = document.getElementById('tempo');
const alguem = document.getElementById('alguem');
const pessoa = document.getElementById('pessoa');
const especial = document.getElementById('especial');
const certeza = document.getElementById('certeza');
const importante = document.getElementById('importante');
const episodio = document.getElementById('episodio');
const vida = document.getElementById('vida');
const mais = document.getElementById('mais');
const romance = document.getElementById('romance');
const razao = document.getElementById('razao');
const capaz = document.getElementById('capaz');
const existe = document.getElementById('existe');
const sentimento = document.getElementById('sentimento');
const montei = document.getElementById('montei');
const todo = document.getElementById('todo');
const intencao = document.getElementById('intencao');
const declarar = document.getElementById('declarar');
const afinal = document.getElementById('afinal');
const palavra = document.getElementById('palavra');
const sinto = document.getElementById('sinto');
const desse = document.getElementById('desse');
const agradece = document.getElementById('agradece');
const lembra = document.getElementById('lembra');
const voce = document.getElementById('voce');
const agatha = document.getElementById('agatha');
const deixe = document.getElementById('deixe');
const contrario = document.getElementById('contrario');
const preto = document.getElementById('preto');
const panda = document.getElementById('panda');
const pata = document.getAnimations('pata');
const bambu1 = document.getElementById('bambu1');
const bambu2 = document.getElementById('bambu2');
const bambu3 = document.getElementById('bambu3');
const bolas = document.getElementById('bolas');
const degrade = document.getElementById('degrade');
const triangulo1 = document.getElementById('triangulo1');
const triangulo2 = document.getElementById('triangulo2');
const triangulo3 = document.getElementById('triangulo3');
const triangulo4 = document.getElementById('triangulo4');
const t1 = document.getElementById ('1');
const t2 = document.getElementById('2');
const t3 = document.getElementById('3');
const t4 = document.getElementById('4');
const t5 = document.getElementById('5');
const t6 = document.getElementById('6');
const t7 = document.getElementById('7');
const t8 = document.getElementById('8');
const t9 = document.getElementById('9');
const t10 = document.getElementById('10');
const t11 = document.getElementById('11');
const t12 = document.getElementById('12');
const t13 = document.getElementById('13');
const t14 = document.getElementById('14');
const t15 = document.getElementById('15');
const t16 = document.getElementById('16');
const t17 = document.getElementById('17');
const t18 = document.getElementById('18');
const t19 = document.getElementById('19');
const t20 = document.getElementById('20');
const t21 = document.getElementById('21');
const t22 = document.getElementById('22');
const t23 = document.getElementById('23');
const t24 = document.getElementById('24');

var vid = document.getElementById('vid');

button.addEventListener('click', () => {
    fundo.classList.remove('blu');
    fundo.classList.add('azul');
    estrela1.classList.remove('blu');
    estrela1.classList.add('azul');
    estrela2.classList.remove('blu');
    estrela2.classList.add('azul');
    estrela3.classList.remove('blu');
    estrela3.classList.add('azul');
    onda1.classList.remove('blu');
    onda1.classList.add('azul');
    onda2.classList.remove('blu');
    onda2.classList.add('azul');
    onda3.classList.remove('blu');
    onda3.classList.add('azul');
    onda4.classList.remove('blu');
    onda4.classList.add('azul');

    setTimeout(function(){
        onda1.id = ('onda11');
        onda2.id = ('onda12');
        onda3.id = ('onda13');
        onda4.id = ('onda14');
        estrela1.id = ('estrela11');
        estrela2.id = ('estrela12');
        estrela3.id = ('estrela13');

        panda.remove();
        pata.remove();
        bambu1.remove();
        bambu2.remove();
        bambu3.remove();
        bolas.remove();
        degrade.remove();
        triangulo1.remove();
        triangulo2.remove();
        triangulo3.remove();
        triangulo4.remove();
    }, 1500);
    setTimeout(function(){
        amor.id = ('amorv');
        vista.id = ('vistav');
        t1.classList.add('texto');
    },3500)
    setTimeout(function(){
        acredito.id = ('acreditov');
        refem.id = ('refemv');
        t2.classList.add('texto2');

        document.getElementById('amorv').remove();
        document.getElementById('vistav').remove();
    }, 8000);
    setTimeout(function(){
        inicio.id = ('iniciov');
        chamam.id = ('chamamv');
        paixao.id = ('paixaov');
        t3.classList.add('texto3');
    }, 14000);
    setTimeout(function(){
        depois.id = ('depoisv');
        irra.id = ('irrav');
        sentia.id = ('sentiav');
        t4.classList.add('texto4');

        document.getElementById('acreditov').remove();
        document.getElementById('refemv').remove();
    }, 19000);
    setTimeout(function(){
        conti.id = ('contiv');
        vive.id = ('vivev');
        t5.classList.add('texto5');

        document.getElementById('iniciov').remove();
        document.getElementById('chamamv').remove();
        document.getElementById('paixaov').remove();
    }, 23900);
    setTimeout(function(){
        parte.id = ('partev');
        esquece.id = ('esquecev');
        t6.classList.add('texto6')
        
        document.getElementById('depoisv').remove();
        document.getElementById('irrav').remove();
        document.getElementById('sentiav').remove();
    }, 29000);
    setTimeout(function(){
        ja.id = ('jav');
        iludi.id = ('iludiv');
        t7.classList.add('texto7');

        document.getElementById('contiv').remove();
        document.getElementById('vivev').remove();
    }, 32800);
    setTimeout(function(){
        opostos.id = ('opostosv');
        confunde.id = ('confundev');
        t8.classList.add('texto8');

        document.getElementById('partev').remove();
        document.getElementById('esquecev').remove();
    }, 37000);
    setTimeout(function(){
        duvida.id = ('duvidav');
        causou.id = ('causouv');
        atitude.id = ('atitudev');
        t9.classList.add('texto9');

        document.getElementById('jav').remove();
        document.getElementById('iludiv').remove();
    }, 41500);
    setTimeout(function(){
        hoje.id = ('hojev');
        algo.id = ('algov');
        t10.classList.add('texto10');

        document.getElementById('opostosv').remove();
        document.getElementById('confundev').remove();
    }, 46500);
    setTimeout(function(){
        desistir.id = ('desistirv');
        prosseguir.id = ('prosseguirv');
        t11.classList.add('texto11');

        document.getElementById('duvidav').remove();
        document.getElementById('causouv').remove();
        document.getElementById('atitudev').remove();
    }, 51000);
    setTimeout(function(){
        site.id = ('sitev');
        alcance.id = ('alcancev');
        t12.classList.add('texto12');

        document.getElementById('hojev').remove();
        document.getElementById('algov').remove();
    }, 55500);
    setTimeout(function(){
        forma.id = ('formav');
        incrivel.id = ('incrivelv');
        t13.classList.add('texto13');

        document.getElementById('desistirv').remove();
        document.getElementById('prosseguirv').remove();
    }, 60000);
    setTimeout(function(){
        talvez.id = ('talvezv');
        acho.id = ('achov');
        tempo.id = ('tempov');
        alguem.id = ('alguemv');
        t14.classList.add('texto14');

        document.getElementById('sitev').remove();
        document.getElementById('alcancev').remove();
    }, 65000);
    setTimeout(function(){
        pessoa.id = ('pessoav');
        especial.id = ('especialv');
        t15.classList.add('texto15');

        document.getElementById('formav').remove();
        document.getElementById('incrivelv').remove();
    }, 70200);
    setTimeout(function(){
        certeza.id = ('certezav');
        importante.id = ('importantev');
        episodio.id = ('episodiov');
        vida.id = ('vidav');
        t16.classList.add('texto16');

        document.getElementById('talvezv').remove();
        document.getElementById('achov').remove();
        document.getElementById('tempov').remove();
        document.getElementById('alguemv').remove();
    }, 75500)
    setTimeout(function(){
        mais.id = ('maisv');
        romance.id = ('romancev');
        razao.id = ('razaov');
        t17.classList.add('texto17'); 

        document.getElementById('pessoav').remove();
        document.getElementById('especialv').remove();
    }, 81000);
    setTimeout(function(){
        capaz.id = ('capazv');
        existe.id = ('existev');
        sentimento.id = ('sentimentov');
        t18.classList.add('texto18');
        
        document.getElementById('certezav').remove();
        document.getElementById('importantev').remove();
        document.getElementById('episodiov').remove();
        document.getElementById('vidav').remove();
    }, 86000);
    setTimeout(function(){
        montei.id = ('monteiv');
        todo.id = ('todov');
        t19.classList.add('texto19');
        
        document.getElementById('maisv').remove();
        document.getElementById('romancev').remove();
        document.getElementById('razaov').remove();
    }, 90500);
    setTimeout(function(){
        intencao.id = ('intencaov');
        declarar.id = ('declararv');
        t20.classList.add('texto20');

        document.getElementById('capazv').remove();
        document.getElementById('existev').remove();
        document.getElementById('sentimentov').remove();
    }, 95000);
    setTimeout(function(){
        afinal.id = ('afinalv');
        palavra.id = ('palavrav');
        sinto.id = ('sintov');
        t21.classList.add('texto21');

        document.getElementById('monteiv').remove();
        document.getElementById('todov').remove();
    }, 99000);
    setTimeout(function(){
        desse.id = ('dessev');
        agradece.id = ('agradecev');
        lembra.id = ('lembrav');
        t22.classList.add('texto22');

        document.getElementById('intencaov').remove();
        document.getElementById('declararv').remove();
    }, 104000);
    setTimeout(function(){
        voce.id = ('vocev');
        agatha.id = ('agathav');
        t23.classList.add('texto23');

        document.getElementById('afinalv').remove();
        document.getElementById('palavrav').remove();
        document.getElementById('sintov').remove();
    }, 109000);
    setTimeout(function(){
        deixe.id = ('deixev');
        contrario.id = ('contrariov');
        t24.classList.add('texto24');

        document.getElementById('dessev').remove();
        document.getElementById('agradecev').remove();
        document.getElementById('lembrav').remove();
    }, 114000);
    setTimeout(function(){
        preto.id = ('pretov');

        document.getElementById('vocev').remove();
        document.getElementById('agathav').remove();
    }, 118000);

    button.classList.remove('antes');
    button.classList.add('depois')
    vid.autoplay = true;
    vid.load();
})