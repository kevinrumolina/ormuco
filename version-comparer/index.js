/* Question B
The goal of this question is to write a software library that accepts 2 version string as input and
returns whether one is greater than, equal, or less than the other. As an example: “1.2” is
greater than “1.1”. Please provide all test cases you could think of. */

function compareVersions(version1, version2) {
    const arrayVersion1 = version1.split('.').map(stringNum => parseInt(stringNum));
    const arrayVersion2 = version2.split('.').map(stringNum => parseInt(stringNum));

    for (let i = 0; i < Math.max(arrayVersion1.length, arrayVersion2.length); i++) {
        const v1Comparator = arrayVersion1[i] || 0;
        const v2Comparator = arrayVersion2[i] || 0;

        if (v1Comparator > v2Comparator) {
            return `${version1} is greater than ${version2}`;
        } else if (v1Comparator < v2Comparator) {
            return `${version1} is lower than ${version2}`;
        }
    }
    
    return "both versions are equal";
}

module.exports = compareVersions;