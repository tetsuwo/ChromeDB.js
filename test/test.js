
// test code

db.change('__jsdoit__');

describe('namespace', function() {
    it("namespace is __jsdoit___", function() {
        expect(db._namespace).toEqual('__jsdoit___');
    });
});

describe('key', function() {
    it("key is __jsdoit___a", function() {
        expect(db.key('a')).toEqual('__jsdoit___a');
    });
});

describe('set and get', function() {
    it("is hoge", function() {
        db.set('jsdoit', 'hoge');
        expect(db.get('jsdoit')).toEqual('hoge');
    });
    it("is 123", function() {
        db.set('jsdoit', 123);
        expect(db.get('jsdoit')).toEqual(123);
    });
    it("is true", function() {
        db.set('jsdoit', true);
        expect(db.get('jsdoit')).toBeTruthy();
    });
    it("is false", function() {
        db.set('jsdoit', false);
        expect(db.get('jsdoit')).toBeFalsy();
    });
    it("is {}", function() {
	var a = {hoge: 'fuga'};
        db.set('jsdoit', a);
        expect(db.get('jsdoit')).toEqual(a);
    });
    it("is []", function() {
	var a = [1,2,3,4,5];
        db.set('jsdoit', a);
        expect(db.get('jsdoit')).toEqual(a);
    });
});

describe('defaultValue of get', function() {
    it("defaultValue is String", function() {
        var v = db.get('nothing', 'hoge');
        expect(v).toEqual('hoge');
    });
    it("defaultValue is Integer", function() {
        var v = db.get('nothing', 123);
        expect(v).toEqual(123);
    });
    it("defaultValue is Boolean.true", function() {
        var v = db.get('nothing', true);
        expect(v).toBeTruthy();
    });
    it("defaultValue is Boolean.false", function() {
        var v = db.get('nothing', false);
        expect(v).toBeFalsy();
    });
    it("defaultValue is Object", function() {
	var a = {hoge: 'fuga'};
        var v = db.get('nothing', a);
        expect(v).toEqual(a);
    });
    it("defaultValue is Array", function() {
	var a = [1,2,3,4,5];
        var v = db.get('nothing', a);
        expect(v).toEqual(a);
    });
});

describe('remove', function() {
    it("defaultValue is Array", function() {
        db.remove('jsdoit');
        expect(db.get('jsdoit')).toBeNull();
    });
});


