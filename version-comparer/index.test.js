const compareVersions = require('./index.js');

describe('compareVersions', () => {
    test('should return that version1 greater than when version1 is greater', () => {
        expect(compareVersions("1.2", "1.1")).toBe("1.2 is greater than 1.1");
        expect(compareVersions("2.2", "2.1.9")).toBe("2.2 is greater than 2.1.9");
        expect(compareVersions("3.0", "1.9")).toBe("3.0 is greater than 1.9");
    });

    test('should return that version1 lower than when version2 is greater', () => {
        expect(compareVersions("1.1", "1.2")).toBe("1.1 is lower than 1.2");
        expect(compareVersions("2.1.9", "2.2")).toBe("2.1.9 is lower than 2.2");
        expect(compareVersions("1.9", "3.0")).toBe("1.9 is lower than 3.0");
    });

    test('should return that "both versions are equal" when versions are equal', () => {
        expect(compareVersions("1.2", "1.2")).toBe("both versions are equal");
        expect(compareVersions("2.2.0", "2.2")).toBe("both versions are equal");
        expect(compareVersions("3", "3.0")).toBe("both versions are equal");
    });

    test('should handle different values and lengths', () => {
        expect(compareVersions("1.2.3", "1.2.5")).toBe("1.2.3 is lower than 1.2.5");
        expect(compareVersions("1.10", "1.9")).toBe("1.10 is greater than 1.9");
        expect(compareVersions("1.2.3.4", "1.2.3.4.0")).toBe("both versions are equal");
    });
});