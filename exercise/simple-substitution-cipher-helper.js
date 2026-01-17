class SubstitutionCipher {
    constructor(abc1, abc2) {
      this.abc1 = abc1;
      this.abc2 = abc2;
    }

    encode(plaintext) {
        return plaintext.split("").map((char) => {
          const index = this.abc1.indexOf(char)
          return index !== -1 ? this.abc2[index] : char
        }).join("");
    }

    decode(ciphertext) {
        return ciphertext.split("").map((char) => {
          const index = this.abc2.indexOf(char)
          return index !== -1 ? this.abc1[index] : char
        }).join("");
    }
}