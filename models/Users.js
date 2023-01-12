const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    
 // name: {
   // type: String,
    // You can also make a validator async by returning a promise.
    validate: () => Promise.reject(new Error('Oops!'))
 // },
  //email: {
 //   type: String,
    // There are two ways for an promise-based async validator to fail:
    // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
    // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
 //   validate: {
 //     validator: () => Promise.resolve(false),
  //    message: 'Email validation failed'
  //  }
 // }
// });

// const User = db.model('User', userSchema);
// const user = new User();

// user.email = 'test@test.co';
// user.name = 'test';

// let error;
// try {
//   await user.validate();
// } catch (err) {
//   error = err;
// }
// assert.ok(error);
// assert.equal(error.errors['name'].message, 'Oops!');
// assert.equal(error.errors['email'].message, 'Email validation failed');
    },
  },
  thoughts: {
    _id: true

  }
  
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = usersSchema;