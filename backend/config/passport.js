const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Ajusta el path a tu modelo

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Buscar el usuario en la base de datos
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
            // Si el usuario no existe, crear uno nuevo
            user = new User({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
            });
            await user.save();
        }
        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});
