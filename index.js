(function() {
    const esc = (string) => string
        .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        .replace(/-/g, '\\x2d');

    globalThis.v4gu3 = class V4gu3 {
        constructor() {
            throw new Error("Class V4gu3 cannot be instantiated.");
        }

        static r3m0veNumb3rs(string) {
            if (typeof string !== "string") throw new Error("Must pass a string to r3m0veNumb3rs.");

            return ["i", "z", "e", "a", "s", "$1", "t", "$1", "$1", "o"].reduce((str, c, i) => str.replace(new RegExp((i + 1).toString(), "g"), c), string.toLowerCase());
        }

        static r3m0veSymb0ls(string) {
            if (typeof string !== "string") throw new Error("Must pass a string to r3m0veSymb0ls.");

            return [
                ["$", "s"],
                ["!", "i"],
                ["@", "a"],
            ].reduce((str, [s, c]) => str.replace(new RegExp(esc(s), "g"), c), string.toLowerCase());
        }

        static r3m0veUn1c0de(string) {
            if (typeof string !== "string") throw new Error("Must pass a string to r3m0veUn1c0de");

            return [
                ["a", "ªAÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧᴬᵃḀḁẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặÅ🄐⒜Ⓐⓐ🄰🅐🅰Ａａ𝐀𝐚𝐴𝑎𝑨𝒂𝒜𝒶𝓐𝓪𝔄𝔞𝔸𝕒𝕬𝖆𝖠𝖺𝗔𝗮𝘈𝘢𝘼𝙖"],
                ["b", "ℬBʙᴮᵇḂḃḄḅḆḇ🄑⒝Ⓑⓑ🄱🅑🅱Ｂｂ𝐁𝐛𝐵𝑏𝑩𝒃𝒷𝓑𝓫𝔅𝔟𝔹𝕓𝕭𝖇𝖡𝖻𝗕𝗯𝘉𝘣𝘽𝙗𝙱𝚋"],
                ["c", "CÇçĆćĈĉĊċČčḈḉℂℭⅭⅽ🄒⒞Ⓒⓒ🄲🅒🅲Ｃｃ𝐂𝐜𝐶𝑐𝑪𝒄𝒞𝒸𝓒𝓬𝔠𝕔𝕮𝖈𝖢𝖼𝗖𝗰𝘊𝘤𝘾𝙘𝙲𝚌"],
                ["d", "DĎďᴰᵈḊḋḌḍḎḏḐḑḒḓⅅⅆⅮⅾ🄓⒟Ⓓⓓ🄳🅓🅳Ｄｄ𝐃𝐝𝐷𝑑𝑫𝒅𝒟𝒹𝓓𝓭𝔇𝔡𝔻𝕕𝕯𝖉𝖣𝖽𝗱𝘋𝘥𝘿𝙙𝙳𝚍"],
                ["e", "EÈÉÊËèéêëĒēĔĕĖėĘęĚěȄȅȆȇȨȩᴱᵉḔḕḖḗḘḙḚḛḜḝẸẹẺẻẼẽẾếỀềỂểỄễỆệℯℰⅇ🄔⒠Ⓔⓔ🄴🅔🅴Ｅｅ𝐄𝐞𝐸𝑒𝑬𝒆𝓔𝓮𝔈𝔢𝔼𝕖𝕰𝖊𝖤𝖾𝗘𝗲𝘌𝘦𝙀𝙚𝙴𝚎"],
                ["f", "FḞḟℱ🄕Ⓕⓕ🄵🅕🅵Ｆｆ𝐅𝐟𝐹𝑓𝑭𝒇𝒻𝓕𝓯𝔉𝔣𝔽𝕗𝕱𝖋𝖥𝖿𝗙𝗳𝘍𝘧𝙁𝙛𝙵𝚏"],
                ["g", "ℊGĜĝĞğĠġĢģǦǧǴǵɡɢᴳᵍḠḡ🄖⒢Ⓖⓖ🄶🅖🅶Ｇｇ𝐆𝐠𝐺𝑔𝑮𝒈𝒢𝓖𝓰𝔊𝔤𝔾𝕘𝕲𝖌𝖦𝗀𝗚𝗴𝘎𝘨𝙂𝙜𝙶𝚐"],
                ["h", "ℌHĤĥȞȟʜʰᴴḢḣḤḥḦḧḨḩḪḫẖℋℍℎ🄗⒣Ⓗⓗ🄷🅗🅷Ｈｈ𝐇𝐡𝐻𝑯𝒉𝒽𝓗𝓱𝔥𝕙𝕳𝖍𝖧𝗁𝗛𝗵𝘏𝘩𝙃𝙝𝙷𝚑"],
                ["i", "ℑIÌÍÎÏìíîïĨĩĪīĬĭĮįİıǏǐȈȉȊȋɪᴵᵢḬḭḮḯỈỉỊịⁱℐℹⅈⅠⅰ🄘⒤Ⓘⓘ🄸🅘🅸Ｉｉ𝐈𝐢𝐼𝑖𝑰𝒊𝒾𝓘𝓲𝔦𝕀𝕚𝕴𝖎𝖨𝗂𝗜𝗶𝘐𝘪𝙄𝙞𝙸𝚒"],
                ["j", "JĴĵǰʲᴶⅉ🄙⒥Ⓙⓙ🄹🅙🅹Ｊｊ𝐉𝐣𝐽𝑗𝑱𝒋𝒥𝒿𝓙𝓳𝔍𝔧𝕁𝕛𝕵𝖏𝖩𝗃𝗝𝗷𝘑𝘫𝙅𝙟𝙹𝚓"],
                ["k", "KĶķǨǩᴷᵏḰḱḲḳḴḵK🄚⒦Ⓚⓚ🄺🅚🅺Ｋｋ𝐊𝐤𝐾𝑘𝑲𝒌𝒦𝓀𝓚𝓴𝔎𝔨𝕂𝕜𝕶𝖐𝖪𝗄𝗞𝗸𝘒𝘬𝙆𝙠𝙺𝚔"],
                ["l", "LĹĺĻļĽľʟˡᴸḶḷḸḹḺḻḼḽℒℓⅬⅼ🄛⒧Ⓛⓛ🄻🅛🅻Ｌｌ𝐋𝐥𝐿𝑙𝑳𝒍𝓁𝓛𝓵𝔏𝔩𝕃𝕝𝕷𝖑𝖫𝗅𝗟𝗹𝘓𝘭𝙇𝙡𝙻𝚕"],
                ["m", "ℳMᴹᵐḾḿṀṁṂṃⅯⅿ🄜⒨Ⓜⓜ🄼🅜🅼Ｍｍ𝐌𝐦𝑀𝑚𝑴𝒎𝓂𝓜𝓶𝔐𝔪𝕄𝕞𝕸𝖒𝖬𝗆𝗠𝗺𝘔𝘮𝙈𝙢𝙼𝚖"],
                ["n", "NÑñŃńŅņŇňǸǹɴᴺṄṅṆṇṈṉṊṋⁿℕ🄝⒩Ⓝⓝ🄽🅝Ｎｎ𝐍𝐧𝑁𝑛𝑵𝒏𝒩𝓃𝓝𝓷𝔑𝔫𝕟𝕹𝖓𝖭𝗇𝗡𝗻𝘕𝘯𝙉𝙣𝙽𝚗"],
                ["o", "ºOÒÓÔÕÖòóôõöŌōŎŏŐőƠơǑǒǪǫǬǭȌȍȎȏȪȫȬȭȮȯȰȱᴼᵒṌṍṎṏṐṑṒṓỌọỎỏỐốỒồỔổỖỗỘộỚ🄞⒪Ⓞⓞ🄾🅞🅾Ｏｏ𝐎𝐨𝑂𝑜𝑶𝒐𝒪𝓞𝓸𝔒𝔬𝕆𝕠𝕺𝖔𝖮𝗈𝗢𝗼𝘖𝘰𝙊𝙤𝙾"],
                ["p", "PᴾᵖṔṕṖṗℙ🄟⒫Ⓟⓟ🄿🅟🅿Ｐｐ𝐏𝐩𝑃𝑝𝑷𝒑𝒫𝓅𝓟𝓹𝔓𝔭𝕡𝕻𝖕𝖯𝗉𝗣𝗽𝘗𝘱𝙋𝙥𝙿𝚙"],
                ["q", "Qℚ🄠⒬Ⓠⓠ🅀🅠🆀Ｑｑ𝐐𝐪𝑄𝑞𝑸𝒒𝒬𝓆𝓠𝓺𝔔𝔮𝕢𝕼𝖖𝖰𝗊𝗤𝗾𝘘𝘲𝙌𝙦𝚀𝚚"],
                ["r", "RŔŕŖŗŘřƦȐȑȒȓʀʳᴿᵣṘṙṚṛṜṝṞṟℛℜℝ🄡⒭Ⓡⓡ🅁🅡🆁Ｒｒ𝐑𝐫𝑅𝑟𝑹𝒓𝓇𝓡𝓻𝔯𝕣𝕽𝖗𝖱𝗋𝗥𝗿𝘙𝘳𝙍𝙧𝚁𝚛"],
                ["s", "SŚśŜŝŞşŠšſȘșˢṠṡṢṣṤṥṦṧṨṩẛ🄢⒮Ⓢⓢ🅂🅢🆂Ｓｓ𝐒𝐬𝑆𝑠𝑺𝒔𝒮𝓈𝓢𝓼𝔖𝔰𝕊𝕤𝕾𝖘𝖲𝗌𝗦𝘀𝘚𝘴𝙎𝙨𝚂𝚜"],
                ["t", "TŢţŤťȚțᵀᵗṪṫṬṭṮṯṰṱẗ🄣⒯Ⓣⓣ🅃🅣🆃Ｔｔ𝐓𝐭𝑇𝑡𝑻𝒕𝒯𝓉𝓣𝓽𝔗𝔱𝕋𝕥𝕿𝖙𝖳𝗍𝗧𝘁𝘛𝘵𝙏𝙩𝚃𝚝"],
                ["u", "UÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưǓǔǕǖǗǘǙǚǛǜȔȕȖȗᵁᵘᵤṲṳṴṵṶṷṸṹṺṻỤụỦủứỪừỬửỮữỰự🄤⒰Ⓤⓤ🅄🅤🆄Ｕｕ𝐔𝐮𝑈𝑢𝑼𝒖𝒰𝓊𝓤𝓾𝔘𝔲𝕌𝕦𝖀𝖚𝖴𝗎𝗨𝘂𝘜𝘶𝙐"],
                ["v", "VᵛᵥṼṽṾṿⅤⅴ🄥⒱Ⓥⓥ🅅🅥🆅Ｖｖ𝐕𝐯𝑉𝑣𝑽𝒗𝒱𝓋𝓥𝓿𝔙𝔳𝕍𝕧𝖁𝖛𝖵𝗏𝗩𝘃𝘝𝘷𝙑𝙫𝚅𝚟"],
                ["w", "WŴŵʷᵂẀẁẂẃẄẅẆẇẈẉẘ🄦⒲Ⓦⓦ🅆🅦🆆Ｗｗ𝐖𝐰𝑊𝑤𝑾𝒘𝒲𝓌𝓦𝔀𝔚𝔴𝕎𝕨𝖂𝖜𝖶𝗐𝗪𝘄𝘞𝘸𝙒𝙬𝚆𝚠"],
                ["x", "XˣẊẋẌẍⅩⅹ🄧⒳Ⓧⓧ🅇🅧🆇Ｘｘ𝐗𝐱𝑋𝑥𝑿𝒙𝒳𝓍𝓧𝔁𝔛𝔵𝕏𝕩"],
                ["y", "YÝýÿŶŷŸȲȳʏʸẎẏẙỲỳỴỵỶỷỸỹ🄨⒴Ⓨⓨ🅈🅨🆈Ｙｙ𝐘𝐲𝑌𝑦𝒀𝒚𝒴𝓎𝓨𝔂𝔜𝔶𝕐𝕪𝖄𝖞𝖸𝗒𝗬𝘆𝘠𝘺𝙔𝙮𝚈𝚢"],
                ["z", "ℨZŹźŻżŽžẐẑẒẓẔℤ🄩⒵Ⓩⓩ🅉🅩🆉Ｚｚ𝐙𝐳𝑍𝑧𝒁𝒛𝒵𝓏𝓩𝔃𝔷𝕫𝖅𝖟𝖹𝗓𝗭𝘇𝘡𝘻𝙕𝙯𝚉𝚣"]
            ].reduce((str, [c, s]) => str.replace(new RegExp(s.split("").join("|"), "g"), c), string.toLowerCase());
        }

        static f1lt3r(string, opts) {
            const numb3rs = (opts && opts.numb3rs) || true;
            const symb0ls = (opts && opts.symb0ls) || true;
            const un1c0de = (opts && opts.un1c0de) || true;

            let out = string;

            if (numb3rs) out = V4gu3.r3m0veNumb3rs(out);
            if (symb0ls) out = V4gu3.r3m0veSymb0ls(out);
            if (un1c0de) out = V4gu3.r3m0veUn1c0de(out);

            return out;
        }

        static f1nd(string, search, opts) {
            return V4gu3.f1lt3r(string, opts).includes(search.toLowerCase());
        }
    }
})();
