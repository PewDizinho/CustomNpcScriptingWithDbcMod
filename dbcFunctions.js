
/**
 * @author PewDizinho
 * @version 3.0
 * 
 * 
 * @param {getDbcHealth} iPlayer
 *  @example getDbcHealth(player)  
 *   @returns Integer
 * 
 * @param {getDbcAttributes} iPlayer
 *  @example getDbcAttributes(player).con
 *   @returns Integer
 * 
 * @param {setDbcAttributes} iPlayer
 *  @example setDbcAttributes(player).str(value);
 *  @returns void
 *
 * 
 */





function getDbcHealth(p) {
    if (p.typeOf(1)) {
        return p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted").func_74779_i("jrmcBdy");
    };
};


function getDbcAttributes(p) {
    if (p.typeOf(1)) {
        var _NBT = p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted");
        return {
            con: _NBT.func_74762_e('jrmcCnsI'),
            str: _NBT.func_74762_e('jrmcStrI'),
            dex: _NBT.func_74762_e('jrmcDexI'),
            wil: _NBT.func_74762_e('jrmcWilI'),
            mnd: _NBT.func_74762_e('jrmcIntI'),
            spi: _NBT.func_74762_e('jrmcCncI'),
            tp: _NBT.func_74762_e('jrmcTpint'),
            pr: _NBT.func_74762_e('jrmcRelease'),
            form: _NBT.func_74779_i('jrmcSSltX').toString().replace(/TR/i, ""),
        };
    };
};


function setDbcAttributes(p) {
    if (p.typeOf(1)) {
        var _NBT = p.getMCEntity().getEntityData().func_74775_l("PlayerPersisted");
        return {
            con: function setCon(value) {
                _NBT.func_74768_a('jrmcCnsI', value);
            },
            str: function setStr(value) {
                _NBT.func_74768_a('jrmcStrI', value);
            },
            dex: function setDex(value) {
                _NBT.func_74768_a('jrmcDexI', value);
            },
            wil: function setWil(value) {
                _NBT.func_74768_a('jrmcWilI', value);
            },
            mnd: function setMnd(value) {
                _NBT.func_74768_a('jrmcIntI', value);
            },
            spi: function setSpi(value) {
                _NBT.func_74768_a('jrmcCncI', value);
            },
            tp: function setTp(value) {
                _NBT.func_74768_a('jrmcTpint', value);
            },
            pr: function setPowerReleased(value) {
                _NBT.func_74768_a('jrmcRelease', value);
            },
            form: function setForm(value) {
                _NBT.func_74778_a('jrmcSSltX', "TR" + value);
            }
        };
    };
};
