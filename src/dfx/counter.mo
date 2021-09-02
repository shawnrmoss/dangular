actor {
    stable var currentValue: Nat = 0;

    public func increment(): async Nat {
        currentValue += 1;
        return currentValue;
    };

    public query func getValue(): async Nat {
        return currentValue;
    };
};
