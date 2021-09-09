package cli

import (
	"strconv"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

func CmdCreateToken() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-token [denom] [description] [maxsupply] [precision] [ticker] [url] [can-change-supply]",
		Short: "Create a new token",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get indexes
			indexDenom := args[0]

			// Get value arguments
			argsDescription := args[1]
			argsMaxsupply := args[2]
			argsPrecision := args[3]
			argsTicker := args[4]
			argsUrl := args[5]
			argsCanChangeSupply := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			max, err := strconv.Atoi(argsMaxsupply)
			precision, err := strconv.Atoi(argsPrecision)
			var canChange bool
			if argsCanChangeSupply == "true" {
				canChange = true
			} else {
				canChange = false
			}
			msg := types.NewMsgCreateToken(
				clientCtx.GetFromAddress().String(),
				indexDenom,
				argsDescription,
				uint64(max),
				uint32(precision),
				argsTicker,
				argsUrl,
				canChange,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateToken() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-token [denom] [description] [maxsupply] [url] ",
		Short: "Update a token",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get indexes
			indexDenom := args[0]

			// Get value arguments
			argsDescription := args[1]
			argsMaxsupply := args[2]
			argsUrl := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			max, err := strconv.Atoi(argsMaxsupply)
			msg := types.NewMsgUpdateToken(
				clientCtx.GetFromAddress().String(),
				indexDenom,
				argsDescription,
				uint64(max),
				argsUrl,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
